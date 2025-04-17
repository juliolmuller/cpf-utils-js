# cpf-utils

## 1.3.0

### Minor Changes

- 57aeab441315f39e6763f963d4144a2ad8558be6: Changed output files for built code targeting Node-based projects. Main file is now `index.cjs` instead of `index.cjs.js`. It should not break any code importing the lib by its name only.

### Patch Changes

- 7f642bf2cd46369cc475e108f0bc2c7b837a33b6: Defined explicit return type for functions.
- 4266e00609df3c003dfc4c306976856db9eac219: Added `build` script to monorepo manager.
- f2ee094a37660e27264ddb81b7c44f3407ae2bb2: Omitted build logs when running tests.
- 6cc51d7f4750fa45f3c89f818ba7550683c2d52a: Fixed docs broken badges.
- 1a5b10306bb112965541d5a937631dc8eea0ce0a: Dropped Travis CI configuration file (`.travis.yml`).
- 4ed63f32f79d42ea25cb8881c8b0f9d4694f5438: Update monorepo scripts to use Bun's `--filter` flag to run batch routines.
- 8247d389e2e6003712fc52cbc4c4a8f78c4244db: Disabled TypeScript lib check for all packages.
- 167424f136c6935fe9f9f1cf9e628ec83333d244: Added tests for built files.
- 4b94608f9586acff343838df1d251452a2f84a9f: Added `type-check` script to all projects and to monorepo.
- 040852c22206b47b72444a66304bbeea4e47df3c..0914b7c70f3852ddcfe88d81c359c1b73e3e41c9: Created GitHub Actions workflow to run linting, type checking and tests in any pushed branch and PR's.
- bf00d1a0858ede64449f8d7202f9ef2969bb690e: Configured [Changesets](https://github.com/changesets/changesets) in the project.
- 8c763276b616df00a6732adc896d5497b52cef15: Set `"publishConfig"` in `package.json` for all packages.
- 583327c71f84bdd8d496bfb1f287fbf7802d729b..84cec9dee81d0af2f52b3153fa410306e2fd13c6: Created GitHub Actions workflow to create changelogs, increase versions and publish to NPM registry.
- 7ba1718: Create file to set codebase owner.
- Updated dependencies:
  - @lacussoft/cpf-gen@1.4.0
  - eslint@9.24.0
  - eslint-config-any@1.0.6
  - lint-staged@15.5.1
  - num-only@1.2.5
  - typescript@5.8.3
