import fs from "fs";
import path from "path";
import { Project } from "ts-morph";
import config from "./config";
import { createDefinitions } from "./createDefinitions";

const readFiles = async (dir: string, project: Project) => {
  const files = fs.readdirSync(dir);
  for (let file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    const info = path.parse(filePath);
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
        customContent: config.customContent,
      });
    } else if (stat.isDirectory()) {
      await readFiles(filePath, project);
    }
  }
};

const main = async (dir: string) => {
  const project = new Project({
    // Optionally specify compiler options, tsconfig.json, in-memory file system, and more here.
    // If you initialize with a tsconfig.json, then it will automatically populate the project
    // with the associated source files.
    // Read more: https://ts-morph.com/setup/
  });
  project.addSourceFilesAtPaths(`${dir}/**/*.ts`);
  await readFiles(dir, project);
  await project.save();
};

const argv = require("yargs").argv;
let target = config.output;
if (argv.target) {
  target = path.join(process.cwd(), argv.target);
}
main(target);
