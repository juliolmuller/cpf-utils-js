---
"cpf-utils": minor
"@lacussoft/cpf-fmt": minor
"@lacussoft/cpf-gen": minor
"@lacussoft/cpf-val": minor
---

57aeab441315f39e6763f963d4144a2ad8558be6 Changed output files for built code targeting Node-based projects. Main file is now `index.cjs` instead of `index.cjs.js`. It should not break any code importing the lib by its name only.
