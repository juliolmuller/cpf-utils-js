import { makeRollupConfig } from '../../rollup.config.mjs'

export default makeRollupConfig('cpf-utils', 'cpfUtils', 'cpf-utils', {
  modules: 'src/module.ts',
  umd: 'src/dist.ts',
})
