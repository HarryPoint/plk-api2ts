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
    const filePath = path.join(config.output, prefix, pathStr);
    const jsonFilePath = `${filePath}.json`;
    const tsFilePath = `${filePath}.ts`;
    if (config.pathFilter && !config.pathFilter(filePath)) {
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
  console.log("main: ", config.createJsonFile);
  const argv = require("yargs").argv;
  if (argv.target) {
    config.output = path.join(process.cwd(), argv.target);
  }
  const project = await createProject(config);
  if (argv.filterPath) {
    const filterPath = argv.filterPath;
    config.pathFilter = (pt: string) => pt.includes(filterPath);
  }
  if (argv.type === "transform") {
    await transform(config, project, config.output);
  }
  if (argv.type === "createJsonFile") {
    config.createJsonFile = true;
  }
  if (argv.type === "createTsFile") {
    config.createTsFile = true;
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
