// import axios from "axios";
import { Project } from "ts-morph";
import data from "../assets/demo.mjs";
import { createDefinitions } from "./createDefinitions.mjs";

// const { data } = await axios.get("http://47.108.135.148:16700/v2/api-docs");
// console.log("data: ", data.definitions);
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

await createDefinitions(definitionsFile, data);

await project.save();
