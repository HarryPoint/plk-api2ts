import baseConfig, { IConfig } from "./config";
import { main as createData } from "./createData";
import { main as createTs } from "./createTs";
const argv = require("yargs").argv;

export const main = async (config: IConfig = baseConfig) => {
  if (!argv.type || argv.type === "createData") {
    await createData(config);
  }
  if (!argv.type || argv.type === "createTs") {
    await createTs(config);
  }
};
