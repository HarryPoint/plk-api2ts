import axios from "axios";
import fs from "fs";
import _ from "lodash";
import path from "path";
import config, { IConfig } from "./config";

const fetchData = async (
  apiUri: string,
  prefix: string = "./",
  config: IConfig
) => {
  if (!apiUri) {
    throw new Error("apiUri not found");
  }
  const { data } = await axios.get(`${apiUri}/v2/api-docs`);
  const baseData = _.pick(data, ["basePath", "host", "info", "swagger"]);
  const findOriginalRef = (pathItem: any): string[] => {
    let result: string[] = [];
    for (let key in pathItem) {
      if (key === "originalRef") {
        return [pathItem[key]];
      }
      if (_.isObject(pathItem[key])) {
        result = [...result, ...findOriginalRef(pathItem[key])];
      }
    }
    return result;
  };

  const createDefinitions = (
    target: any,
    prevDefines: Record<string, any> = {}
  ): Record<string, any> => {
    return findOriginalRef(target).reduce((pre, next) => {
      if (pre.hasOwnProperty(next)) {
        return pre;
      }
      const nextDefine = _.cloneDeep(data.definitions[next]);
      pre = {
        ...pre,
        [next]: _.cloneDeep(data.definitions[next]),
      };
      return createDefinitions(nextDefine, pre);
    }, prevDefines);
  };
  const openJsonArr = _.toPairs(data.paths).map(([path, pathItem]) => {
    return [
      path,
      {
        ..._.cloneDeep(baseData),
        paths: {
          [path]: pathItem,
        },
        definitions: createDefinitions(pathItem),
      },
    ] as [string, any];
  });
  openJsonArr.forEach(([pathStr, jsonData]) => {
    const pathArr = pathStr.split("/");
    const outputFolder = path.join(
      config.output,
      prefix,
      pathArr.slice(0, pathArr.length - 1).join("/")
    );
    console.log("outputFolder: ", outputFolder);
    const filePath = path.join(config.output, prefix, `${pathStr}.json`);
    // 创建输出目录
    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), "utf-8");
  });
};

const main = async (config: IConfig) => {
  for (const key in config.serviceMap) {
    const apiUri = config.serviceMap[key as keyof typeof config.serviceMap];
    await fetchData(apiUri, config.serviceNameToPath ? key : "./", config);
  }
};

main(config);
