import { cac } from "cac";
import { version } from "../package.json";
import { IConfig, defaultConfig } from "./config";
import { main } from "./main";
import path from "path";

const cli = cac("api2ts");

/**
 * removing global flags before passing as command specific sub-configs
 */
function cleanOptions(options: any): IConfig {
  const ret = { ...options };
  delete ret["--"];
  ret.translate = ret.translate === "true";
  ret.createJsonFile = ret.json === "true";
  delete ret.json;
  ret.createTsFile = ret.ts === "false" ? false : true;
  delete ret.ts;
  if (typeof ret.nlk === "string") {
    ret.newLineKind = ret.nlk as "CRLF" | "LF";
  }
  delete ret.nlk;
  ret.sort = ret.sort === "true";
  if (typeof ret.type === "string") {
    if (ret.type === "transform") {
      ret.transform = true;
    }
    if (ret.type === "clear") {
      ret.clearJsonFile = true;
    }
  }
  delete ret.type;
  // 配置重置
  if (ret.target) {
    ret.output = path.join(process.cwd(), ret.target);
  }
  delete ret.target;
  return {
    ...defaultConfig,
    ...ret,
  };
}

cli
  .option(
    "--translate <boolean>",
    `[boolean] translate Chinese to English (default: false)`
  )
  .option(
    "--json <boolean>",
    `[boolean] generate JSON file based on the interface information (default: false)`
  )
  .option(
    "--ts <boolean>",
    `[boolean] generate TS file based on the interface information (default: true)`
  )
  .option("--nlk <string>", `["CRLF" | "LF] new line kind (default: "CRLF")`)
  .option("--sort <boolean>", `[boolean] sort the result (default: false)`)
  .option(
    "--type <string>",
    `["transform" | "clear"] chose work mode, transform will generate ts/json file, clear will clear the data file(default: transform)`
  )
  .option(
    "--platform <string>",
    `[string] if the options is set, the other platform will be ignored`
  )
  .option(
    "--filter <string>",
    `[string] if the options is set, the other api path will be ignored`
  )
  .option(
    "--target <string>",
    `[string] if the options is set, the transform dir will be change`
  );

cli
  .command("[root]", "transform swagger api to ts file")
  .action(async (root: string, options: IConfig) => {
    const cleanOpts = cleanOptions(options);
    console.log("root: string, options: IConfig: ", root, cleanOpts);
    try {
      await main(cleanOpts);
    } catch (error) {
      console.error("error: ", error);
    }
  });

cli.help();
cli.version(version);

cli.parse();
