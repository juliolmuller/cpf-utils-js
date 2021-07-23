import mergeDeep from 'deepmerge'

type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>
}

export type ActualCpfFormattingOptions = {
  delimiters: {
    dot: string
    dash: string
  }
  hiddenRange: {
    start: number
    end: number
  }
  onFail: (value: string, error: Error) => any
  hiddenKey: string
  hidden: boolean
  escape: boolean
}

export type CpfFormattingOptions = DeepPartial<ActualCpfFormattingOptions>

const defaultOptions: ActualCpfFormattingOptions = {
  delimiters: {
    dot: '.',
    dash: '-',
  },
  hiddenRange: {
    start: 3,
    end: 10,
  },
  onFail: (value) => value,
  hiddenKey: '*',
  hidden: false,
  escape: false,
}

/**
 * Merge custom options to the default ones.
 */
function mergeOptions(customOptions: Partial<CpfFormattingOptions> = {}) {
  const options = mergeDeep(defaultOptions, customOptions) as ActualCpfFormattingOptions

  if (options.hidden) {
    if (isNaN(options.hiddenRange.start)
        || options.hiddenRange.start < 0
        || options.hiddenRange.start > 10
    ) {
      throw new TypeError('Option "hiddenRange.start" must be a number between 0 and 10.')
    }

    if (isNaN(options.hiddenRange.end)
        || options.hiddenRange.end < 0
        || options.hiddenRange.end > 10
    ) {
      throw new TypeError('Option "hiddenRange.end" must be a number between 0 and 10.')
    }

    if (options.hiddenRange.start > options.hiddenRange.end) {
      const aux = options.hiddenRange.start
      options.hiddenRange.start = options.hiddenRange.end
      options.hiddenRange.end = aux
    }
  }

  if (typeof options.onFail !== 'function') {
    throw new TypeError('The option "onFail" must be a callback function.')
  }

  return options
}

export default mergeOptions
