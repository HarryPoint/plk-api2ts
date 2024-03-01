import fs from "fs";
import path from "path";
import { SourceFile } from "ts-morph";
import { customContent, transformOriginType } from "./plkTpl";

const argv = require("yargs").argv;

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

const output = path.join(process.cwd(), "./api2ts");

const defaultConfig: IConfig = {
  translate: false,
  translateCacheFileName: "translateCache.json",
  translateApiUri: "https://openapi.youdao.com/v2/api",
  translateAppKey: "4a8802ec639e5e84",
  translateAppSecret: "mRl99kIGJSPI1TgdCn53v8J8HX0HgN19",
  translateChunkSize: 100,
  transform: false,
  interfacePrefix: "I",
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

let configFn = (config: IConfig, argv: any) => config;

if (fs.existsSync(configPath)) {
  configFn = require(configPath);
}

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
    if (path.sep === path.win32.sep) {
      pt = pt.replace(/\\/g, "/");
    }
    return pt === filter;
  };
}
if (argv.translate) {
  configData.translate = argv.translate === "true" ? true : false;
}
if (argv.json) {
  configData.createJsonFile = argv.json === "true" ? true : false;
}
if (argv.ts) {
  configData.createTsFile = argv.ts === "false" ? false : true;
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
