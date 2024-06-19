import axios from "axios";
import CryptoJS from "crypto-js";
import fs from "fs";
import _ from "lodash";
import path from "path";
import qs from "qs";
import { getRunTimeConfig } from "./config";

const getConfig = () => {
  const config = getRunTimeConfig();
  const apiUri = config.translateApiUri;
  const appKey = config.translateAppKey;
  const appSecret = config.translateAppSecret;
  const chunkSize = config.translateChunkSize;
  const output = config.output;
  const translateCacheFileName = config.translateCacheFileName;
  return {
    apiUri,
    appKey,
    appSecret,
    chunkSize,
    output,
    translateCacheFileName,
  };
};

type IParams = {
  appKey: string;
  input: string;
  salt: string;
  curTime: string;
  appSecret: string;
};

type ITranslateItem = {
  query: string;
  translation: string;
  type: string;
};

const createSign = ({ appKey, input, salt, curTime, appSecret }: IParams) => {
  let str = input;
  const len = input.length;
  if (len > 20) {
    str = input.substring(0, 10) + len + input.substring(len - 10, len);
  }
  return CryptoJS.SHA256(
    `${appKey}${str}${salt}${curTime}${appSecret}`
  ).toString(CryptoJS.enc.Hex);
};

const fetchApi = async (input: string[]) => {
  const { apiUri, appKey, appSecret } = getConfig();
  const curTime = `${Math.round(new Date().getTime() / 1000)}`;
  const salt = `${new Date().getTime()}`;
  return await axios({
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
      return qs.stringify(params, { arrayFormat: "repeat" });
    },
  });
};

export const translate = async (input: string | string[]) => {
  const { chunkSize, output, translateCacheFileName } = getConfig();
  const inputArr = Array.isArray(input) ? input : [input];
  const chunkArr = _.chunk(inputArr, chunkSize);
  const translateCachePath = path.join(output, translateCacheFileName);
  let translateCacheData: Record<string, string> = {};
  try {
    const stat = fs.statSync(translateCachePath);
    if (stat.isFile()) {
      translateCacheData =
        JSON.parse(fs.readFileSync(translateCachePath, "utf-8").toString()) ||
        {};
    }
  } catch (err) {}
  const chunkResArr: string[][] = [];
  const translateFn = async (inputArr: string[]) => {
    const newInputArr = inputArr.filter((item) => !translateCacheData[item]);
    if (newInputArr.length) {
      const { data } = await fetchApi(newInputArr);
      // console.log("data: ", data);
      if (data.translateResults) {
        const apiTransMap = (data.translateResults as ITranslateItem[])
          .map((item, index) => ({
            [newInputArr[index]]: _.words(item.translation)
              .map((word) => _.upperFirst(word))
              .join(""),
          }))
          .reduce(
            (pre, next) => ({ ...pre, ...next }),
            {} as Record<string, string>
          );
        translateCacheData = {
          ...translateCacheData,
          ...apiTransMap,
        };
        console.log("await start", newInputArr);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("await end", newInputArr);
      } else {
        console.log("inputArr-error: ", data, newInputArr);
      }
    }
    return inputArr.map((item) => translateCacheData[item] || item);
  };
  for (let chunkItem of chunkArr) {
    chunkResArr.push(await translateFn(chunkItem));
  }
  fs.writeFileSync(
    translateCachePath,
    JSON.stringify(translateCacheData, null, 2)
  );
  return _.flatten(chunkResArr);
};
