import fs from "fs";
import path from "path";
import { SourceFile } from "ts-morph";
import { customContent } from "./plkTpl";

export type IConfig = {
  prefix: string;
  enumPrefix: string;
  translate: boolean;
  translateCacheFileName: string;
  translateApiUri: string;
  translateAppKey: string;
  translateAppSecret: string;
  translateChunkSize: number;
  serviceMap: Record<string, string>;
  serviceNameToPath: boolean;
  output: string;
  transformOriginType?: (define: any) => string;
  customContent: (
    data: any,
    definitionsFile: SourceFile,
    transFormType: (arg: any) => string
  ) => Promise<void>;
};

const output = path.join(process.cwd(), "./autoApi");

const defaultConfig: IConfig = {
  translate: true,
  translateCacheFileName: "translateCache.json",
  translateApiUri: "https://openapi.youdao.com/v2/api",
  translateAppKey: "4a8802ec639e5e84",
  translateAppSecret: "mRl99kIGJSPI1TgdCn53v8J8HX0HgN19",
  translateChunkSize: 100,
  prefix: "I",
  enumPrefix: "E",
  serviceMap: {},
  serviceNameToPath: false,
  output,
  customContent,
};

const argv = require("yargs").argv;

const configPath = path.join(process.cwd(), argv.config || "api2ts.config.js");

if (!fs.existsSync(configPath)) {
  throw new Error("config file not found");
}

let configFn = require(configPath);
let configData: Partial<IConfig> = {};

if (typeof configFn === "function") {
  configData = configFn(defaultConfig) as Partial<IConfig>;
} else {
  configData = configFn as Partial<IConfig>;
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
