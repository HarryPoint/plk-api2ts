import fs from "fs";
import path from "path";
import { SourceFile } from "ts-morph";
import { customContent, transformOriginType } from "./plkTpl";

const argv = require("yargs").argv;

export type IConfig = {
  prefix: string;
  enumPrefix: string;
  translate: boolean;
  translateCacheFileName: string;
  translateApiUri: string;
  translateAppKey: string;
  translateAppSecret: string;
  translateChunkSize: number;
  transform: boolean;
  serviceMap: Record<string, string>;
  serviceNameToPath: boolean;
  output: string;
  createTsFile: boolean;
  createJsonFile: boolean;
  clearJsonFile: boolean;
  transformOriginType: (define: any) => string;
  customContent: (
    data: any,
    definitionsFile: SourceFile,
    transFormType: (arg: any) => string
  ) => Promise<void>;
  pathFilter?: (ar: string) => boolean;
};

const output = path.join(process.cwd(), "./autoApi");

const defaultConfig: IConfig = {
  translate: true,
  translateCacheFileName: "translateCache.json",
  translateApiUri: "https://openapi.youdao.com/v2/api",
  translateAppKey: "4a8802ec639e5e84",
  translateAppSecret: "mRl99kIGJSPI1TgdCn53v8J8HX0HgN19",
  translateChunkSize: 100,
  transform: false,
  prefix: "I",
  enumPrefix: "E",
  serviceMap: {},
  serviceNameToPath: false,
  createTsFile: true,
  createJsonFile: false,
  clearJsonFile: false,
  output,
  transformOriginType,
  customContent,
  pathFilter: (ar: string) => !!ar,
};

const configPath = path.join(process.cwd(), argv.config || "api2ts.config.js");

if (!fs.existsSync(configPath)) {
  throw new Error("config file not found");
}

let configFn = require(configPath);
let configData: Partial<IConfig> = {};

if (typeof configFn === "function") {
  configData = configFn(defaultConfig, argv) as Partial<IConfig>;
} else {
  configData = configFn as Partial<IConfig>;
}

// 配置重置
if (argv.target) {
  configData.output = path.join(process.cwd(), argv.target);
}
if (argv.filter) {
  const filter = argv.filter;
  configData.pathFilter = (pt: string) => {
    return pt === filter;
  };
}
if (argv.json === "true") {
  configData.createJsonFile = true;
}
if (argv.ts === "false") {
  configData.createTsFile = false;
}
if (argv.type === "transform") {
  configData.transform = true;
}
if (argv.type === "clear") {
  configData.clearJsonFile = true;
}

if (!configData.output) {
  throw new Error("config file must have output field");
}

if (!configData.serviceMap) {
  throw new Error("config file must have serviceMap field");
}

const resultConfig: IConfig = {
  ...defaultConfig,
  ...configData,
};

export default resultConfig;
