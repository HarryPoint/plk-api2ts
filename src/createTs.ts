import fs from "fs";
import path from "path";
import { Project } from "ts-morph";
import baseConfig, { IConfig } from "./config";
import { main as createProject, createTsFile } from "./project";

const readFiles = async (config: IConfig, dir: string, project: Project) => {
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
      // fs.unlink(filePath, (err) => {
      //   if (err) {
      //     console.error("Error deleting file:", err);
      //     return;
      //   }
      // });
      const swaggerData = JSON.parse(data.toString());
      const tsPath = path.join(info.dir, `${info.name}.ts`);
      await createTsFile(config, project, tsPath, swaggerData);
    } else if (stat.isDirectory()) {
      await readFiles(config, filePath, project);
    }
  }
};

export const main = async (config: IConfig = baseConfig) => {
  const argv = require("yargs").argv;
  if (argv.target) {
    config.output = path.join(process.cwd(), argv.target);
  }
  if (argv.filterPath) {
    const filterPath = argv.filterPath;
    config.pathFilter = (pt: string) => pt.includes(filterPath);
  }
  const project = await createProject(config);
  await readFiles(config, config.output, project);
  await project.save();
};
