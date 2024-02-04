import path from "path";
const argv = require("yargs").argv;
const dir = path.join(__dirname, "..", argv.dir);
export default {
  dir,
  translateCache: path.join(dir, "translateCache.json"),
};
