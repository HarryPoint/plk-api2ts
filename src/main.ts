import baseConfig, { IConfig } from "./config";
import { main as createData } from "./createData";
import { main as createTs } from "./createTs";

export const main = async (config: IConfig = baseConfig) => {
  await createData(config);
  await createTs(config);
};
