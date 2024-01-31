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

const prefix = "#_";

const definitionsMap = {};

for (let name in data.definitions) {
  const define = data.definitions[name];
  if (define.type === "object") {
    // definitionsFile.addTypeAliases
    definitionsFile.addStatements("// " + name);
    const ins = definitionsFile.addInterface({
      name,
      isExported: true,
      properties: Object.keys(define.properties).map((key) => ({
        name: key,
        type:
          define.properties[key].type ||
          `${prefix}${define.properties[key].$ref.split("/").pop()}`,
      })),
    });
    // console.log("----", ins.getName());
    definitionsMap[name] = ins;
  }
}
for (let key in definitionsMap) {
  const ins = definitionsMap[key];
  for (let prop of ins.getProperties()) {
    const propText = prop.getType().getText();
    if (propText.startsWith(prefix)) {
      const defineName = propText.replace(prefix, "");
      const targetIns = definitionsMap[defineName];
      if (targetIns) {
        // console.log("targetIns: ", targetIns);
        // for(iote)
        // console.log("(((", Object.keys(Object.getPrototypeOf(prop)));
        prop.setType(targetIns.getName());
      }
      // console.log(
      //   "propText: ",
      //   propText,
      //   defineName,
      //   definitionsMap[defineName].getName()
      // );
      // prop.setType(definitionsMap[propText].getType());
    }
  }
}

await project.save();
