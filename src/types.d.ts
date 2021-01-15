import { default as cpfFormattingFn } from '@lacussoft/cpf-fmt';
import { default as cpfGenerationFn } from '@lacussoft/cpf-gen';
import { default as cpfValidationFn } from '@lacussoft/cpf-val';

declare const format: typeof cpfFormattingFn;

declare const generate: typeof cpfGenerationFn;

declare const isValid: typeof cpfValidationFn;

export { CpfFormattingOptions } from '@lacussoft/cpf-fmt';

export { CpfGeneratorOptions } from '@lacussoft/cpf-gen';

export { format };
export { generate };
export { isValid };
export default { format, generate, isValid };
