"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const ts_morph_1 = require("ts-morph");
const config_1 = __importDefault(require("./config"));
const createDefinitions_1 = require("./createDefinitions");
const readFiles = (dir, project) => __awaiter(void 0, void 0, void 0, function* () {
    const files = fs_1.default.readdirSync(dir);
    for (let file of files) {
        const filePath = path_1.default.join(dir, file);
        const stat = fs_1.default.statSync(filePath);
        const info = path_1.default.parse(filePath);
        if (stat.isFile() &&
            info.ext === ".json" &&
            filePath !== config_1.default.translateCache) {
            const data = fs_1.default.readFileSync(filePath);
            const swaggerData = JSON.parse(data.toString());
            const tsPath = path_1.default.join(info.dir, `${info.name}.ts`);
            const definitionsFile = project.createSourceFile(tsPath, "", {
                overwrite: true,
            });
            yield (0, createDefinitions_1.createDefinitions)(definitionsFile, swaggerData, {
                translate: true,
            });
        }
        else if (stat.isDirectory()) {
            yield readFiles(filePath, project);
        }
    }
});
const main = (dir) => __awaiter(void 0, void 0, void 0, function* () {
    const project = new ts_morph_1.Project({
    // Optionally specify compiler options, tsconfig.json, in-memory file system, and more here.
    // If you initialize with a tsconfig.json, then it will automatically populate the project
    // with the associated source files.
    // Read more: https://ts-morph.com/setup/
    });
    project.addSourceFilesAtPaths(`${dir}/**/*.ts`);
    yield readFiles(dir, project);
    yield project.save();
});
main(config_1.default.dir);
