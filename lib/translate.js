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
exports.translate = void 0;
const axios_1 = __importDefault(require("axios"));
const crypto_js_1 = __importDefault(require("crypto-js"));
const fs_1 = __importDefault(require("fs"));
const lodash_1 = __importDefault(require("lodash"));
const qs_1 = __importDefault(require("qs"));
const config_1 = __importDefault(require("./config"));
const apiUri = config_1.default.translateApiUri;
const appKey = config_1.default.translateAppKey;
const appSecret = config_1.default.translateAppSecret;
const chunkSize = config_1.default.translateChunkSize;
const createSign = ({ appKey, input, salt, curTime, appSecret }) => {
    let str = input;
    const len = input.length;
    if (len > 20) {
        str = input.substring(0, 10) + len + input.substring(len - 10, len);
    }
    return crypto_js_1.default.SHA256(`${appKey}${str}${salt}${curTime}${appSecret}`).toString(crypto_js_1.default.enc.Hex);
};
const fetchApi = (input) => __awaiter(void 0, void 0, void 0, function* () {
    const curTime = `${Math.round(new Date().getTime() / 1000)}`;
    const salt = `${new Date().getTime()}`;
    return yield (0, axios_1.default)({
        url: apiUri,
        method: "get",
        params: {
            q: input, //	text	待翻译文本	True	必须是UTF-8编码
            from: "auto", //	text	源语言	True	参考下方 支持语言 (可设置为auto)
            to: "en", //	text	目标语言	True	参考下方 支持语言
            appKey, //	text	应用ID	True	可在应用管理 查看
            salt, //	text	随机字符串，可使用UUID进行生产	True	uuid (可使用uuid生成)
            sign: createSign({
                appKey,
                input: input.join(""),
                salt,
                curTime,
                appSecret,
            }), //	text	签名	True	sha256(应用ID+input+salt+curtime+应用密钥)
            signType: "v3", //	text	签名类型	True	v3
            curtime: curTime, //	text	当前UTC时间戳(秒)	true	TimeStamp
        },
        paramsSerializer: (params) => {
            return qs_1.default.stringify(params, { arrayFormat: "repeat" });
        },
    });
});
const translate = (input) => __awaiter(void 0, void 0, void 0, function* () {
    const inputArr = Array.isArray(input) ? input : [input];
    const chunkArr = lodash_1.default.chunk(inputArr, chunkSize);
    let translateCacheData = {};
    try {
        const stat = fs_1.default.statSync(config_1.default.translateCache);
        if (stat.isFile()) {
            translateCacheData =
                JSON.parse(fs_1.default.readFileSync(config_1.default.translateCache, "utf-8").toString()) || {};
        }
    }
    catch (err) { }
    const chunkResArr = [];
    const translateFn = (inputArr) => __awaiter(void 0, void 0, void 0, function* () {
        const newInputArr = inputArr.filter((item) => !translateCacheData[item]);
        if (newInputArr.length) {
            const { data } = yield fetchApi(newInputArr);
            // console.log("data: ", data);
            if (data.translateResults) {
                const apiTransMap = data.translateResults
                    .map((item, index) => ({
                    [newInputArr[index]]: lodash_1.default.words(item.translation)
                        .map((word) => lodash_1.default.upperFirst(word))
                        .join(""),
                }))
                    .reduce((pre, next) => (Object.assign(Object.assign({}, pre), next)), {});
                translateCacheData = Object.assign(Object.assign({}, translateCacheData), apiTransMap);
                console.log("await start", newInputArr);
                yield new Promise((resolve) => setTimeout(resolve, 1000));
                console.log("await end", newInputArr);
            }
            else {
                console.log("inputArr-error: ", data, newInputArr);
            }
        }
        return inputArr.map((item) => translateCacheData[item] || item);
    });
    for (let chunkItem of chunkArr) {
        chunkResArr.push(yield translateFn(chunkItem));
    }
    fs_1.default.writeFileSync(config_1.default.translateCache, JSON.stringify(translateCacheData, null, 2));
    return lodash_1.default.flatten(chunkResArr);
});
exports.translate = translate;
