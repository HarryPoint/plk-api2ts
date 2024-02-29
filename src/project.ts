import { Project } from "ts-morph";
import baseConfig, { IConfig } from "./config";
import { createDefinitions } from "./createDefinitions";

export const main = async (config: IConfig = baseConfig) => {
  const project = new Project({
    // Optionally specify compiler options, tsconfig.json, in-memory file system, and more here.
    // If you initialize with a tsconfig.json, then it will automatically populate the project
    // with the associated source files.
    // Read more: https://ts-morph.com/setup/
  });
  project.addSourceFilesAtPaths(`${config.output}/**/*.ts`);
  return project;
};

export const createTsFile = async (
  config: IConfig = baseConfig,
  project: Project,
  filePath: string,
  data: any
) => {
  const definitionsFile = project.createSourceFile(filePath, "", {
    overwrite: true,
  });
  await createDefinitions(definitionsFile, data, {
    translate: config.translate,
    prefix: config.prefix,
    enumPrefix: config.enumPrefix,
    transformOriginType: config.transformOriginType,
    customContent: config.customContent,
  });
};
