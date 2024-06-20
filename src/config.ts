import path from "path";
import { SourceFile } from "ts-morph";
import { contentTemplate, customContent, transformOriginType } from "./plkTpl";

export type IConfig = {
  interfacePrefix: string;
  enumPrefix: string;
  translate: boolean;
  translateCacheFileName: string;
  translateApiUri: string;
  translateAppKey: string;
  translateAppSecret: string;
  translateChunkSize: number;
  transform: boolean;
  apiPath: string; // 原本是定制的地址，现在可以自行指定
  serviceMap: Record<string, string>;
  serviceNameToPath: boolean;
  output: string;
  createTsFile: boolean;
  createJsonFile: boolean;
  clearJsonFile: boolean;
  newLineKind: "CRLF" | "LF";
  sort: boolean;
  transformOriginType: (define: any) => string;
  customContent: (
    data: any,
    definitionsFile: SourceFile,
    contentTemplate: string,
    transFormType: (arg: any) => string
  ) => Promise<void>;
  contentTemplate: string;
  pathFilter?: (ar: string) => boolean;
};

const output = path.join(process.cwd(), "./api2ts");

export const defaultConfig: IConfig = {
  translate: false,
  translateCacheFileName: "translateCache.json",
  translateApiUri: "https://openapi.youdao.com/v2/api",
  translateAppKey: "4a8802ec639e5e84",
  translateAppSecret: "mRl99kIGJSPI1TgdCn53v8J8HX0HgN19",
  translateChunkSize: 100,
  transform: false,
  apiPath: "/v2/api-docs",
  interfacePrefix: "I",
  enumPrefix: "E",
  serviceMap: {},
  serviceNameToPath: false,
  createTsFile: true,
  createJsonFile: false,
  clearJsonFile: false,
  newLineKind: "LF",
  sort: false,
  output,
  transformOriginType,
  customContent,
  contentTemplate,
  pathFilter: (ar: string) => !!ar,
};

let runTimeConfig = defaultConfig;

export const setRunTimeConfig = (config: Partial<IConfig>) => {
  runTimeConfig = { ...runTimeConfig, ...config };
};

export const getRunTimeConfig = () => {
  return runTimeConfig;
};
