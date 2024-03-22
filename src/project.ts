import { NewLineKind, Project } from "ts-morph";
import baseConfig, { IConfig } from "./config";
import { createDefinitions } from "./createDefinitions";

export const main = async (config: IConfig = baseConfig) => {
  const project = new Project({
    // Optionally specify compiler options, tsconfig.json, in-memory file system, and more here.
    // If you initialize with a tsconfig.json, then it will automatically populate the project
    // with the associated source files.
    // Read more: https://ts-morph.com/setup/
    manipulationSettings: {
      newLineKind:
        config.newLineKind === "LF"
          ? NewLineKind.LineFeed
          : NewLineKind.CarriageReturnLineFeed,
    },
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
    interfacePrefix: config.interfacePrefix,
    enumPrefix: config.enumPrefix,
    transformOriginType: config.transformOriginType,
    customContent: config.customContent,
    contentTemplate: config.contentTemplate,
  });
  definitionsFile.saveSync();
};

export const createJsonFile = async (
  config: IConfig = baseConfig,
  project: Project,
  filePath: string,
  data: any
) => {
  const definitionsFile = project.createSourceFile(
    filePath,
    JSON.stringify(data, null, 2),
    {
      overwrite: true,
    }
  );
  definitionsFile.saveSync();
};
