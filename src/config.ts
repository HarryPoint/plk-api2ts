import fs from "fs";
import path from "path";

export type IConfig = {
  translateCacheFileName: string;
  translateApiUri: string;
  translateAppKey: string;
  translateAppSecret: string;
  translateChunkSize: number;
  serviceMap: Record<string, string>;
  serviceNameToPath: boolean;
  output: string;
};

const platformMap = {
  dev: "47.108.139.107",
  uat: "47.108.135.148",
};

const serviceMap = {
  "masterdata-service": 16700,
  "plk-uaa-service": 18100,
  "flow-service": 16500,
  "todo-service": 16600,
  "app-enterprise-web": 16400,
  "app-mobile-web": 17400,
  "message-notification-service": 17600,
};

type IPlatformMap = typeof platformMap;

type IServiceMap = typeof serviceMap;

const apiMap = Object.keys(platformMap)
  .map((platform) => ({
    [platform]: Object.keys(serviceMap)
      .map((service) => ({
        [service]: `http://${platformMap[platform as keyof IPlatformMap]}:${
          serviceMap[service as keyof IServiceMap]
        }`,
      }))
      .reduce(
        (prev, next) => ({ ...prev, ...next }),
        {} as Record<keyof IServiceMap, string>
      ),
  }))
  .reduce(
    (prev, next) => ({ ...prev, ...next }),
    {} as Record<string, Record<keyof IServiceMap, string>>
  ) as Record<string, Record<keyof IServiceMap, string>>;

const output = path.join(process.cwd(), "./openapi");

const defaultConfig: IConfig = {
  translateCacheFileName: "translateCache.json",
  translateApiUri: "https://openapi.youdao.com/v2/api",
  translateAppKey: "4a8802ec639e5e84",
  translateAppSecret: "mRl99kIGJSPI1TgdCn53v8J8HX0HgN19",
  translateChunkSize: 100,
  serviceMap: apiMap.dev,
  serviceNameToPath: false,
  output,
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

const resultConfig: IConfig = {
  ...defaultConfig,
  ...configData,
};

export default resultConfig;
