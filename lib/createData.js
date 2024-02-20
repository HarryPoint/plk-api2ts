"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const lodash_1 = __importDefault(require("lodash"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("./config"));
const fetchData = (apiUri, prefix = "./") => __awaiter(void 0, void 0, void 0, function* () {
    if (!apiUri) {
        throw new Error("apiUri not found");
    }
    const { data } = yield axios_1.default.get(`${apiUri}/v2/api-docs`);
    const baseData = lodash_1.default.pick(data, ["basePath", "host", "info", "swagger"]);
    const findOriginalRef = (pathItem) => {
        let result = [];
        for (let key in pathItem) {
            if (key === "originalRef") {
                return [pathItem[key]];
            }
            if (lodash_1.default.isObject(pathItem[key])) {
                result = [...result, ...findOriginalRef(pathItem[key])];
            }
        }
        return result;
    };
    const createDefinitions = (target, prevDefines = {}) => {
        return findOriginalRef(target).reduce((pre, next) => {
            if (pre.hasOwnProperty(next)) {
                return pre;
            }
            const nextDefine = lodash_1.default.cloneDeep(data.definitions[next]);
            pre = Object.assign(Object.assign({}, pre), { [next]: lodash_1.default.cloneDeep(data.definitions[next]) });
            return createDefinitions(nextDefine, pre);
        }, prevDefines);
    };
    const openJsonArr = lodash_1.default.toPairs(data.paths).map(([path, pathItem]) => {
        return [
            path,
            Object.assign(Object.assign({}, lodash_1.default.cloneDeep(baseData)), { paths: {
                    [path]: pathItem,
                }, definitions: createDefinitions(pathItem) }),
        ];
    });
    openJsonArr.forEach(([pathStr, jsonData]) => {
        const pathArr = pathStr.split("/");
        const outputFolder = path_1.default.join(config_1.default.dir, prefix, pathArr.slice(0, pathArr.length - 1).join("/"));
        console.log("outputFolder: ", outputFolder);
        const filePath = path_1.default.join(config_1.default.dir, prefix, `${pathStr}.json`);
        // 创建输出目录
        if (!fs_1.default.existsSync(outputFolder)) {
            fs_1.default.mkdirSync(outputFolder, { recursive: true });
        }
        fs_1.default.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), "utf-8");
    });
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    for (const key in config_1.default.serviceMap) {
        const apiUri = config_1.default.serviceMap[key];
        yield fetchData(apiUri, config_1.default.serviceNameToPath ? key : "./");
    }
});
main();
