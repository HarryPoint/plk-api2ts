const path = require("path");

module.exports = () => {
  return {
    output: path.resolve(__dirname, "./openapi"),
  };
};
