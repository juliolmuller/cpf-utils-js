import mergeDeep from 'deepmerge'

export type ActualCpfGeneratorOptions = {
  format: boolean
  prefix: string
}

export type CpfGeneratorOptions = Partial<ActualCpfGeneratorOptions>

const defaultOptions = {
  format: false,
  prefix: '',
}

/**
 * Merge custom options to the default ones.
 */
function mergeOptions(customOptions: CpfGeneratorOptions = {}) {
  return mergeDeep(defaultOptions, customOptions) as ActualCpfGeneratorOptions
}

export default mergeOptions
