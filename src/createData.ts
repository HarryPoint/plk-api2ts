import axios from "axios";
import _ from "lodash";
import path from "path";
import { Project } from "ts-morph";
import baseConfig, { IConfig } from "./config";
import { main as createProject, createTsFile } from "./project";

const fetchData = async (
  config: IConfig,
  project: Project,
  apiUri: string,
  prefix: string = "./"
) => {
  if (!apiUri) {
    throw new Error("apiUri not found");
  }
  const { data: originData } = await axios.get(`${apiUri}/v2/api-docs`);
  const sortData = (data: any): any => {
    if (Array.isArray(data)) {
      return data.map(sortData);
    }
    if (_.isObject(data)) {
      let keys = Object.keys(data);
      keys = keys.includes("originalRef") ? keys.sort().reverse() : keys;
      return keys.reduce((pre, next) => {
        pre[next] = sortData((data as any)[next]);
        return pre;
      }, {} as Record<string, any>);
    }
    return data;
  };
  const data = sortData(originData);

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
  for (let [pathStr, jsonData] of openJsonArr) {
    const pathArr = pathStr.split("/");
    const outputFolder = path.join(
      config.output,
      prefix,
      pathArr.slice(0, pathArr.length - 1).join("/")
    );
    const filePath = path.join(config.output, prefix, `${pathStr}.json`);
    if (config.pathFilter && !config.pathFilter(filePath)) {
      continue;
    }
    console.log("filePath: ", filePath);
    await createTsFile(config, project, filePath, jsonData);
    // // 创建输出目录
    // if (!fs.existsSync(outputFolder)) {
    //   fs.mkdirSync(outputFolder, { recursive: true });
    // }
    // fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), "utf-8");
  }
};

export const main = async (config: IConfig = baseConfig) => {
  const argv = require("yargs").argv;
  if (argv.filterPath) {
    const filterPath = argv.filterPath;
    config.pathFilter = (pt: string) => pt.includes(filterPath);
  }
  const project = await createProject(config);
  for (const key in config.serviceMap) {
    const apiUri = config.serviceMap[key as keyof typeof config.serviceMap];
    await fetchData(
      config,
      project,
      apiUri,
      config.serviceNameToPath ? key : "./"
    );
  }
  await project.save();
};
