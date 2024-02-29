import fs from "fs";
import path from "path";
import { Project } from "ts-morph";
import { IConfig } from "./config";
import { createTsFile } from "./project";

export const transform = async (
  config: IConfig,
  project: Project,
  dir: string
) => {
  const files = fs.readdirSync(dir);
  for (let file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    const info = path.parse(filePath);
    if (
      stat.isFile() &&
      info.ext === ".json" &&
      info.base !== config.translateCacheFileName &&
      ((config.pathFilter && config.pathFilter(filePath)) || !config.pathFilter)
    ) {
      const data = fs.readFileSync(filePath);
      const swaggerData = JSON.parse(data.toString());
      const tsPath = path.join(info.dir, `${info.name}.ts`);
      await createTsFile(config, project, tsPath, swaggerData);
    } else if (stat.isDirectory()) {
      await transform(config, project, filePath);
    }
  }
};
