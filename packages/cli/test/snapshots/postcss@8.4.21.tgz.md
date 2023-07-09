# postcss@8.4.21.tgz

```
$ attw postcss@8.4.21.tgz -f table-flipped


🎭 Import resolved to a CommonJS type declaration file, but an ESM JavaScript file. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseCJS.md

🐛 Import resolved to types through a conditional package.json export, but only after failing to resolve through an earlier condition. This behavior is a TypeScript bug (https://github.com/microsoft/TypeScript/issues/50762). It may misrepresent the runtime behavior of this import and should not be relied upon. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FallbackCondition.md

❗️ The resolved types use export default where the JavaScript file appears to use module.exports =. This will cause TypeScript under the node16 module mode to think an extra .default property access is required, but that will likely fail at runtime. These types should use export = instead of export default. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseExportDefault.md

❌ Import resolved to JavaScript files, but no type declarations were found. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/UntypedResolution.md


┌────────────────────┬─────────────────────────┬─────────────────────────┬─────────────────────────┬─────────────────────────┐
│                    │ node10                  │ node16 (from CJS)       │ node16 (from ESM)       │ bundler                 │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss"          │ 🟢                      │ 🟢 (CJS)                │ 🎭 Masquerading as CJS  │ 🐛 Used fallback condi… │
│                    │                         │                         │ 🐛 Used fallback condi… │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/at-r… │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/comm… │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/cont… │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/css-… │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/decl… │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/from… │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/inpu… │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/lazy… │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/no-w… │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/list" │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/map-… │ ❌ No types             │ ❌ No types             │ ❌ No types             │ ❌ No types             │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/node" │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/pars… │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/pars… │ ❌ No types             │ ❌ No types             │ ❌ No types             │ ❌ No types             │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/post… │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/prev… │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/proc… │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/resu… │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/root" │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/rule" │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/stri… │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/stri… │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/symb… │ ❌ No types             │ ❌ No types             │ ❌ No types             │ ❌ No types             │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/term… │ ❌ No types             │ ❌ No types             │ ❌ No types             │ ❌ No types             │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/toke… │ ❌ No types             │ ❌ No types             │ ❌ No types             │ ❌ No types             │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/warn… │ ❌ No types             │ ❌ No types             │ ❌ No types             │ ❌ No types             │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/lib/warn… │ 🟢                      │ 🟢 (CJS)                │ ❗️ Incorrect default … │ 🟢                      │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "postcss/package.… │ 🟢 (JSON)               │ 🟢 (JSON)               │ 🟢 (JSON)               │ 🟢 (JSON)               │
└────────────────────┴─────────────────────────┴─────────────────────────┴─────────────────────────┴─────────────────────────┘


```

Exit code: 1