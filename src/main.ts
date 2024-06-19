import axios from "axios";
import _ from "lodash";
import path from "path";
import { Project } from "ts-morph";
import baseConfig, { IConfig } from "./config";
import { createJsonFile, main as createProject, createTsFile } from "./project";
import { transform } from "./transform";

const fetchData = async (
  config: IConfig,
  project: Project,
  apiUri: string,
  prefix: string = "./"
) => {
  console.log("apiUri: ", apiUri);
  if (!apiUri) {
    throw new Error("apiUri not found");
  }
  let { data: originData } = await axios.get(`${apiUri}/v2/api-docs.json`);
  const sortData = (data: any): any => {
    if (Array.isArray(data)) {
      return data.map(sortData);
    }
    if (_.isObject(data)) {
      let keys = Object.keys(data).sort();
      return keys.reduce((pre, next) => {
        pre[next] = sortData((data as any)[next]);
        return pre;
      }, {} as Record<string, any>);
    }
    return data;
  };
  const data = config.sort ? sortData(originData) : originData;

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
    const basePath = path.join(config.output, prefix);
    const filePath = path.join(basePath, pathStr);
    const apiPath = filePath.replace(basePath, path.sep);
    const jsonFilePath = `${filePath}.json`;
    const tsFilePath = `${filePath}.ts`;
    if (config.pathFilter && !config.pathFilter(apiPath)) {
      continue;
    }
    if (config.createTsFile) {
      await createTsFile(config, project, tsFilePath, jsonData);
    }
    if (config.createJsonFile) {
      await createJsonFile(config, project, jsonFilePath, jsonData);
    }
  }
};

export const main = async (config: IConfig = baseConfig) => {
  const project = await createProject(config);
  if (config.transform || config.clearJsonFile) {
    return transform(config, project, config.output);
  }
  for (const key in config.serviceMap) {
    const apiUri = config.serviceMap[key as keyof typeof config.serviceMap];
    await fetchData(
      config,
      project,
      apiUri,
      config.serviceNameToPath ? key : "./"
    );
  }
};

// main();
