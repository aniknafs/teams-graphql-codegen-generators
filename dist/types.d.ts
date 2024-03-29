export declare const EInputType: {
  SINGLE_FILE: string;
  MULTIPLE_FILES: string;
  PROJECT: string;
};
export interface GeneratorConfig {
  inputType: string;
  flattenTypes: boolean;
  config?: {
    [configName: string]: any;
  };
  templates:
    | {
        [templateName: string]: string | string[];
      }
    | string;
  primitives: {
    String: string;
    Int: string;
    Float: string;
    Boolean: string;
    ID: string;
  };
  outFile?: string;
  filesExtension?: string;
  customHelpers?: {
    [helperName: string]: Function;
  };
}
