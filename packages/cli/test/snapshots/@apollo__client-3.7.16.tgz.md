# @apollo__client-3.7.16.tgz

```
$ attw @apollo__client-3.7.16.tgz -f table-flipped


👺 Import resolved to an ESM type declaration file, but a CommonJS JavaScript file. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/FalseESM.md

⚠️ A require call resolved to an ESM JavaScript file, which is an error in Node and some bundlers. CommonJS consumers will need to use a dynamic import. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/CJSResolvesToESM.md

🥴 Import found in a type declaration file failed to resolve. Either this indicates that runtime resolution errors will occur, or (more likely) the types misrepresent the contents of the JavaScript files. https://github.com/arethetypeswrong/arethetypeswrong.github.io/blob/main/docs/problems/InternalResolutionError.md


┌────────────────────┬─────────────────────────┬─────────────────────────┬─────────────────────────┬─────────────────────────┐
│                    │ node10                  │ node16 (from CJS)       │ node16 (from ESM)       │ bundler                 │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client"   │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/c… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/c… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/e… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/l… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/l… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/l… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/l… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/l… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/l… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/l… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/l… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/l… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/l… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/l… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/l… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/r… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/r… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/r… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/r… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/r… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/r… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/r… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/t… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/t… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/u… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
├────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┼─────────────────────────┤
│ "@apollo/client/u… │ 🟢                      │ 👺 Masquerading as ESM  │ 👺 Masquerading as ESM  │ 🟢                      │
│                    │                         │ ⚠️ ESM (dynamic import… │ 🥴 Internal resolution… │                         │
│                    │                         │ 🥴 Internal resolution… │                         │                         │
└────────────────────┴─────────────────────────┴─────────────────────────┴─────────────────────────┴─────────────────────────┘


```

Exit code: 1