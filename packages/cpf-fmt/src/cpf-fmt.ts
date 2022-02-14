import { escape as escapeHTML } from 'html-escaper'
import numOnly from 'num-only'

import mergeOptions from './merge-options'
import type { CpfFormattingOptions } from './merge-options'

/**
 * Validate a given CPF char sequence.
 */
function cpfFmt(cpfString: string, options?: CpfFormattingOptions) {
  const CPF_LENGTH = 11
  const cpfArray = numOnly(cpfString).split('')
  const customOptions = mergeOptions(options)

  if (cpfArray.length !== CPF_LENGTH) {
    const error = new Error(`Parameter "${cpfString}" does not contain ${CPF_LENGTH} digits.`)

    return customOptions.onFail(cpfString, error) as string
  }

  if (customOptions.hidden) {
    for (let i = customOptions.hiddenRange.start; i <= customOptions.hiddenRange.end; i++) {
      cpfArray[i] = customOptions.hiddenKey
    }
  }

  cpfArray.splice(9, 0, customOptions.delimiters.dash) // eslint-disable-line no-magic-numbers
  cpfArray.splice(6, 0, customOptions.delimiters.dot) // eslint-disable-line no-magic-numbers
  cpfArray.splice(3, 0, customOptions.delimiters.dot) // eslint-disable-line no-magic-numbers
  const cpfPretty = cpfArray.join('')

  if (customOptions.escape) {
    return escapeHTML(cpfPretty)
  }

  return cpfPretty
}

export default cpfFmt
