import fs from "fs";
import path from "path";
import { Project } from "ts-morph";
import config, { IConfig } from "./config";
import { createDefinitions } from "./createDefinitions";

const readFiles = async (config: IConfig, dir: string, project: Project) => {
  const files = fs.readdirSync(dir);
  for (let file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    const info = path.parse(filePath);
    if (config.pathFilter && !config.pathFilter(filePath)) {
      continue;
    }
    if (
      stat.isFile() &&
      info.ext === ".json" &&
      info.base !== config.translateCacheFileName
    ) {
      const data = fs.readFileSync(filePath);
      const swaggerData = JSON.parse(data.toString());
      const tsPath = path.join(info.dir, `${info.name}.ts`);
      const definitionsFile = project.createSourceFile(tsPath, "", {
        overwrite: true,
      });
      await createDefinitions(definitionsFile, swaggerData, {
        translate: config.translate,
        prefix: config.prefix,
        enumPrefix: config.enumPrefix,
        transformOriginType: config.transformOriginType,
        customContent: config.customContent,
      });
    } else if (stat.isDirectory()) {
      await readFiles(config, filePath, project);
    }
  }
};

const main = async (config: IConfig) => {
  const project = new Project({
    // Optionally specify compiler options, tsconfig.json, in-memory file system, and more here.
    // If you initialize with a tsconfig.json, then it will automatically populate the project
    // with the associated source files.
    // Read more: https://ts-morph.com/setup/
  });
  project.addSourceFilesAtPaths(`${config.output}/**/*.ts`);
  await readFiles(config, config.output, project);
  await project.save();
};

const argv = require("yargs").argv;
if (argv.target) {
  config.output = path.join(process.cwd(), argv.target);
}
if (argv.filterPath) {
  const filterPath = argv.filterPath;
  config.pathFilter = (pt: string) => pt.includes(filterPath);
}
main(config);
