const path = require("path");

module.exports = () => {
  return {
    output: path.resolve(__dirname, "./openapi"),
    serviceMap: {
      "masterdata-service": "http://47.108.139.107:16700",
    },
  };
};
