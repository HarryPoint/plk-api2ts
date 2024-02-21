"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
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
const apiMap = Object.keys(platformMap)
    .map((platform) => ({
    [platform]: Object.keys(serviceMap)
        .map((service) => ({
        [service]: `http://${platformMap[platform]}:${serviceMap[service]}`,
    }))
        .reduce((prev, next) => (Object.assign(Object.assign({}, prev), next)), {}),
}))
    .reduce((prev, next) => (Object.assign(Object.assign({}, prev), next)), {});
const output = path_1.default.join(process.cwd(), "./openapi");
const defaultConfig = {
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
const configPath = path_1.default.join(process.cwd(), argv.config || "api2ts.config.js");
if (!fs_1.default.existsSync(configPath)) {
    throw new Error("config file not found");
}
let configFn = require(configPath);
let configData = {};
if (typeof configFn === "function") {
    configData = configFn(defaultConfig);
}
else {
    configData = configFn;
}
if (!configData.output) {
    throw new Error("config file must have output field");
}
const resultConfig = Object.assign(Object.assign({}, defaultConfig), configData);
exports.default = resultConfig;
