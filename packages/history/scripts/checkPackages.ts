import { checkPackage, createPackageFromTarballUrl } from "@arethetypeswrong/core";
import { appendFileSync } from "fs";
import { Worker, isMainThread, parentPort, workerData } from "node:worker_threads";
import type { Blob, FullJsonLine } from "./types.ts";
import { versions } from "@arethetypeswrong/core/versions";
import { npmHighImpact } from "npm-high-impact";

const delay = 10;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function postBlob(blob: Blob) {
  if (isMainThread) {
    throw new Error("This function must be called from a worker thread.");
  }

  parentPort!.postMessage(blob);
}

if (!isMainThread && parentPort) {
  parentPort.on("message", async ({ packageName, packageVersion, tarballUrl, prevMessage }) => {
    let tries = 0;
    while (true) {
      try {
        const analysis = await checkPackage(await createPackageFromTarballUrl(tarballUrl));
        postBlob({
          kind: "analysis",
          workerId: workerData.workerId,
          data: analysis,
        });
        return;
      } catch (error) {
        await sleep(delay * 100 * tries);
        if (tries++ > 3) {
          postBlob({
            kind: "error",
            workerId: workerData.workerId,
            packageName,
            packageVersion,
            tarballUrl,
            message: "" + (error as Error)?.message,
            prevMessage,
          });
          return;
        }
      }
    }
  });
}

export default function checkPackages(
  packages: { packageName: string; packageVersion: string; tarballUrl: string }[],
  outFile: URL,
  workerCount: number
): Promise<boolean> {
  if (!packages.length) {
    return Promise.resolve(false);
  }

  if (!isMainThread) {
    throw new Error("This function must be called from the main thread.");
  }

  const workers = Array.from({ length: workerCount }, (_, i) => {
    return new Worker(new URL(import.meta.url), { workerData: { workerId: i } });
  });

  return new Promise<boolean>(async (resolve, reject) => {
    let wroteChanges = false;
    const packagesDonePerWorker = new Array(workerCount).fill(0);
    const workQueue: { packageName: string; packageVersion: string; tarballUrl: string; prevMessage?: string }[] = [
      ...packages,
    ];
    let finishedWorkers = 0;
    for (const worker of workers) {
      worker.on("message", async (blob: Blob) => {
        const workerIndex = workers.indexOf(worker);
        packagesDonePerWorker[workerIndex]++;
        if (blob.kind === "error") {
          console.error(`[${workerIndex}] ${blob.packageName}@${blob.packageVersion}: ${blob.message}`);
          if (blob.prevMessage === blob.message) {
            console.error(`Package ${blob.packageName}@${blob.packageVersion} failed repeatedly; skipping.`);
          } else {
            workQueue.push({
              packageName: blob.packageName,
              packageVersion: blob.packageVersion,
              tarballUrl: blob.tarballUrl,
              prevMessage: blob.message,
            });
          }
        } else {
          // Sometimes the package version in the npm manifest is different from the package.json,
          // so we need to use the version we were asked for so we don't repeat this work.
          const originalPackage = packages.find((p) => p.packageName === blob.data.packageName)!;
          const packageSpec = `${blob.data.packageName}@${originalPackage.packageVersion}`;
          appendFileSync(
            outFile,
            JSON.stringify(
              {
                analysis: blob.data,
                coreVersion: versions.core,
                packageSpec,
                rank: npmHighImpact.indexOf(blob.data.packageName),
              } satisfies FullJsonLine,
              (key, value) => {
                if (key === "trace") {
                  return [];
                }
                return value;
              }
            ) + "\n"
          );
          console.log(`[${workerIndex}] ${packages.length - workQueue.length}/${packages.length} ${packageSpec}`);
          wroteChanges = true;
        }

        await sleep(delay);
        if (workQueue.length > 0) {
          const next = workQueue.shift()!;
          worker.postMessage(next);
        } else {
          await worker.terminate();
          console.log(`[${workerIndex}] done`);
          finishedWorkers++;

          if (finishedWorkers === workers.length) {
            resolve(wroteChanges);
          }
        }
      });

      worker.once("error", async (error) => {
        await Promise.all(workers.map((worker) => worker.terminate()));
        reject(error);
      });

      await sleep(delay);
      const nextPackage = workQueue.shift();
      if (nextPackage) {
        worker.postMessage({ ...nextPackage, index: packages.indexOf(nextPackage) });
      } else {
        await worker.terminate();
        console.log(`[${workers.indexOf(worker)}] done`);
        finishedWorkers++;

        if (finishedWorkers === workers.length) {
          resolve(wroteChanges);
        }
      }
    }

    process.on("SIGINT", async () => {
      await Promise.all(workers.map((worker) => worker.terminate()));
      reject(new Error("SIGINT"));
    });
  });
}
