// import axios from "axios";
import { Project } from "ts-morph";
import data from "./assets/demo.mjs";

// const data = await axios.get("http://47.108.135.148:16700/v2/api-docs");
// console.log("data: ", data);
// initialize
const project = new Project({
  // Optionally specify compiler options, tsconfig.json, in-memory file system, and more here.
  // If you initialize with a tsconfig.json, then it will automatically populate the project
  // with the associated source files.
  // Read more: https://ts-morph.com/setup/
});

// add source files
project.addSourceFilesAtPaths("src/**/*.ts");
const definitionsFile = project.createSourceFile("src/definitions.ts", "", {
  overwrite: true,
});

const typeMap = {
  string: "string",
  integer: "number",
  number: "number",
  boolean: "boolean",
  array: "[]",
};

const prefix = "#_";

const definitionsMap = {};

const transFormType = (define) => {
  if (define.originalRef) {
    return definitionsMap[define.originalRef].name;
  }
  const typeOrigin = typeMap[define.type];
  if (typeOrigin === typeMap.array) {
    return transFormType(define.items) + "[]";
  }
  return typeOrigin;
};

// 记录所有的定义
for (let name in data.definitions) {
  const define = data.definitions[name];
  if (define.type === "object") {
    definitionsMap[name] = {
      name,
      ins: null,
      define,
    };
  }
}

// 生成所有的定义
for (let name in definitionsMap) {
  const item = definitionsMap[name];
  const define = item.define;
  if (define.type === "object") {
    definitionsFile.addStatements("// " + item.name);
    const ins = definitionsFile.addInterface({
      name: item.name,
      isExported: true,
      properties: Object.keys(define.properties).map((key) => ({
        name: key,
        type: transFormType(define.properties[key]),
        leadingTrivia: `// ${define.properties[key].description}`,
        // trailingTrivia: `// ${define.properties[key].description}`,
      })),
    });
    definitionsMap[name].ins = ins;
  }
}

await project.save();
