import axios from "axios";
import fs from "fs";
import _ from "lodash";
import path from "path";

type IServiceMap = {
  "masterdata-service": string;
};

type IServiceKey = keyof IServiceMap;

const apiMap: Record<string, IServiceMap> = {
  dev: {
    "masterdata-service": "http://47.108.135.148:16700",
  },
};
type IPlatformKey = keyof typeof apiMap;

const fetchData = async (
  platform: IPlatformKey = "dev",
  service: IServiceKey = "masterdata-service"
) => {
  const apiUri = apiMap?.[platform]?.[service];
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
  ) => {
    return findOriginalRef(target).reduce((pre, next) => {
      if (pre.hasOwnProperty(next)) {
        return pre;
      }
      return {
        ...pre,
        [next]: _.cloneDeep(data.definitions[next]),
      };
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
      __dirname,
      "..",
      "openapi",
      pathArr.slice(0, pathArr.length - 1).join("/")
    );
    console.log("outputFolder: ", outputFolder);
    const filePath = path.join(__dirname, "..", "openapi", `${pathStr}.json`);
    // 创建输出目录
    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder, { recursive: true });
    }
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), "utf-8");
  });
};

fetchData();
