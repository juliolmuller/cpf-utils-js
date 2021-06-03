
const DEFAULT_OPTIONS = {
  format: false,
  prefix: '',
};

/**
 * Merge custom options to the default ones.
 *
 * @param {CpfGeneratorOptions} options
 * @return {CpfGeneratorOptions}
 */
function mergeOptions(options) {
  return {
    ...DEFAULT_OPTIONS,
    ...options,
  };
}

export default mergeOptions;
