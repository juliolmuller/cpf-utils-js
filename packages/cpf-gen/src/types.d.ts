
export type CpfGeneratorOptions = {
  format?: boolean;
  prefix?: string;
};

declare const cpfGen: (options?: CpfGeneratorOptions) => string;

export default cpfGen;
