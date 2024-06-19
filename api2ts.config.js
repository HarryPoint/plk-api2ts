const path = require("path");
const argv = require("yargs").argv;

const platformMap = {
  dev: "47.108.139.107",
  uat: "47.108.135.148",
  demo: "localhost",
};

const serviceMap = {
  // "masterdata-service": 16700,
  // "plk-uaa-service": 18100,
  // "flow-service": 16500,
  // "todo-service": 16600,
  "app-enterprise-web": 16400,
  // "message-notification-service": 17600,
};

const apiMap = Object.keys(platformMap)
  .map((platform) => ({
    [platform]: Object.keys(serviceMap)
      .map((service) => ({
        [service]: `http://${platformMap[platform]}:${serviceMap[service]}`,
      }))
      .reduce((prev, next) => ({ ...prev, ...next }), {}),
  }))
  .reduce((prev, next) => ({ ...prev, ...next }), {});

module.exports = () => {
  console.log("argv.platform: ", argv.platform);
  return {
    output: path.resolve(__dirname, "./openapi"),
    serviceMap: argv.platform === "dev" ? apiMap.dev : apiMap.demo,
    translate: true,
    sort: true,
  };
};
