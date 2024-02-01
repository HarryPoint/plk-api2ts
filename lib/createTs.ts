import fs from "fs";
import path from "path";
import { Project } from "ts-morph";
import { createDefinitions } from "./createDefinitions";

const argv = require("yargs").argv;

const dir = path.join(__dirname, "..", argv.dir);

const readFiles = async (dir: string, project: Project) => {
  const files = await fs.readdirSync(dir);
  files.forEach(async (file) => {
    const filePath = path.join(dir, file);
    const stat = await fs.statSync(filePath);
    if (stat.isFile()) {
      // {
      //   root: '/',
      //   dir: '/Users/admin/plk/explore/ts-generator/openapi/masterdata-service/userProcess/{id}/productionPerson',
      //   base: 'set.json',
      //   ext: '.json',
      //   name: 'set'
      // }
      const info = path.parse(filePath);
      const data = await fs.readFileSync(filePath);
      const swaggerData = data.toString();
      const tsPath = path.join(info.dir, `${info.name}.ts`);
      console.log("tsPath: ", tsPath);
      const definitionsFile = project.createSourceFile(tsPath, "", {
        overwrite: true,
      });
      await createDefinitions(definitionsFile, swaggerData, {
        translate: false,
      });
    } else if (stat.isDirectory()) {
      await readFiles(filePath, project);
    }
  });
};

const main = async () => {
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
main();
