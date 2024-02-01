import { translate as translateFn } from "./translate.mjs";

const typeMap = {
  string: "string",
  integer: "number",
  number: "number",
  boolean: "boolean",
  array: "[]",
};

export const createDefinitions = async (definitionsFile, data, option) => {
  const { translate = true } = option || {};
  const definitionsMap = {};

  const transFormType = (define) => {
    if (define.originalRef) {
      // console.log("define.originalRef: ", define.originalRef);
      if (!definitionsMap[define.originalRef]) {
        console.log("define.originalRef: ", define.originalRef);
        return define.originalRef;
      }
      return definitionsMap[define.originalRef].name;
    }
    const typeOrigin = typeMap[define.type];
    if (typeOrigin === typeMap.array) {
      return transFormType(define.items) + "[]";
    }
    return typeOrigin;
  };

  // 去除所有的特殊字符
  const formatName = (name) => name.replace(/[、,，/《》«»()（）-\s]/gi, "");

  // 记录所有的定义
  for (let name in data.definitions) {
    const define = data.definitions[name];
    if (define.type === "object") {
      definitionsMap[name] = {
        name: formatName(name),
        originName: name,
        ins: null,
        define,
      };
    }
  }
  // 翻译所有的中文名称
  if (translate) {
    const translateItemArr = Object.values(definitionsMap);
    // 对所有中文名称处理
    const names = translateItemArr.map((item) => item.name);
    const result = await translateFn(names);
    translateItemArr.forEach((item, index) => {
      item.name = `I${formatName(result[index])}`;
    });
  }

  // 生成所有的定义
  for (let name in definitionsMap) {
    const item = definitionsMap[name];
    const define = item.define;
    if (define.type === "object") {
      definitionsFile.addStatements("// " + item.originName);
      const ins = definitionsFile.addInterface({
        name: item.name,
        isExported: true,
        properties: Object.keys(define.properties || {}).map((key) => ({
          name: key,
          type: transFormType(define.properties[key]),
          leadingTrivia: `// ${define.properties[key].description}`,
          // trailingTrivia: `// ${define.properties[key].description}`,
        })),
      });
      definitionsMap[name].ins = ins;
    }
  }
};
