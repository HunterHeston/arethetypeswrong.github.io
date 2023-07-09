# axios@1.4.0.tgz

```
$ attw axios@1.4.0.tgz -f table-flipped


❓ Wildcard subpaths cannot yet be analyzed by this tool. https://github.com/arethetypeswrong/arethetypeswrong.github.io/issues/40

💀 Import failed to resolve to type declarations or JavaScript files. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/NoResolution.md

❌ Import resolved to JavaScript files, but no type declarations were found. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/UntypedResolution.md

⚠️ A require call resolved to an ESM JavaScript file, which is an error in Node and some bundlers. CommonJS consumers will need to use a dynamic import. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/CJSResolvesToESM.md


┌────────────────────┬─────────────────────────┬─────────────────────────┬─────────────────────────┬─────────────────────────┐
│                    │ node10                  │ node16 (from CJS)       │ node16 (from ESM)       │ bundler                 │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "axios"            │ 🟢                      │ 🟢 (CJS)                │ 🟢 (ESM)                │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "axios/unsafe/*"   │ ❓ Unable to check      │ ❓ Unable to check      │ ❓ Unable to check      │ ❓ Unable to check      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "axios/unsafe/cor… │ 💀 Resolution failed    │ ❌ No types             │ ❌ No types             │ ❌ No types             │
│                    │                         │ ⚠️ ESM (dynamic import… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "axios/unsafe/cor… │ 💀 Resolution failed    │ ❌ No types             │ ❌ No types             │ ❌ No types             │
│                    │                         │ ⚠️ ESM (dynamic import… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "axios/unsafe/hel… │ 💀 Resolution failed    │ ❌ No types             │ ❌ No types             │ ❌ No types             │
│                    │                         │ ⚠️ ESM (dynamic import… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "axios/unsafe/hel… │ 💀 Resolution failed    │ ❌ No types             │ ❌ No types             │ ❌ No types             │
│                    │                         │ ⚠️ ESM (dynamic import… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "axios/unsafe/hel… │ 💀 Resolution failed    │ ❌ No types             │ ❌ No types             │ ❌ No types             │
│                    │                         │ ⚠️ ESM (dynamic import… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "axios/unsafe/ada… │ 💀 Resolution failed    │ ❌ No types             │ ❌ No types             │ ❌ No types             │
│                    │                         │ ⚠️ ESM (dynamic import… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "axios/unsafe/ada… │ 💀 Resolution failed    │ ❌ No types             │ ❌ No types             │ ❌ No types             │
│                    │                         │ ⚠️ ESM (dynamic import… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "axios/unsafe/uti… │ 💀 Resolution failed    │ ❌ No types             │ ❌ No types             │ ❌ No types             │
│                    │                         │ ⚠️ ESM (dynamic import… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "axios/package.js… │ 🟢 (JSON)               │ 🟢 (JSON)               │ 🟢 (JSON)               │ 🟢 (JSON)               │
└────────────────────┴─────────────────────────┴─────────────────────────┴─────────────────────────┴─────────────────────────┘


```

Exit code: 1