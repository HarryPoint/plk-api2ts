import { OptionalKind, PropertySignatureStructure, SourceFile } from "ts-morph";
import { IConfig } from "./config";
import { translate as translateFn } from "./translate";

const typeMap = {
  string: "string",
  integer: "number",
  number: "number",
  boolean: "boolean",
  array: "[]",
  object: "{}",
};

// 去除所有的特殊字符
const formatName = (name: string) =>
  name.replace(/[、,，'/《》«»()（）-\s]/gi, "");

type IDefinitionsMapItem = {
  name: string;
  originName: string;
  ins: any;
  define: any;
};

export const createDefinitions = async (
  definitionsFile: SourceFile,
  data: any,
  option?: {
    translate?: boolean;
    prefix?: string;
    customContent?: IConfig["customContent"];
  }
) => {
  const { translate = true, prefix = "I", customContent } = option || {};
  const definitionsMap: Record<string, IDefinitionsMapItem> = {};
  const formatEnumValue = (str: string) => {
    const newStrArr = str.trim().split("-");
    return newStrArr[0];
  };
  const transFormType = (define: any): string => {
    if (define.originalRef) {
      if (!definitionsMap[define.originalRef]) {
        return define.originalRef;
      }
      return definitionsMap[define.originalRef].name;
    }
    const typeOrigin = typeMap[define.type as keyof typeof typeMap];
    if (typeOrigin === typeMap.array) {
      return `(${transFormType(define.items)})[]`;
    }
    if (typeOrigin === typeMap.object) {
      if (define.properties) {
        const requiredKeys = define.required || [];
        return `{ ${Object.keys(define.properties || {})
          .map(
            (key) =>
              `${formatName(key)}${
                requiredKeys.includes(key) ? "" : "?"
              }: ${transFormType(define.properties[key])}`
          )
          .join("; ")} }`;
      }
      return `Record<string, ${
        define?.additionalProperties
          ? transFormType(define?.additionalProperties)
          : "any"
      }>`;
    }
    if (typeOrigin === typeMap.string && define.enum) {
      return define.enum
        ?.map((item: string) => `'${formatEnumValue(item)}'`)
        .join(" | ");
    }
    return typeOrigin;
  };

  // 记录所有的定义
  // console.log("data.definitions: ", data.definitions);
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
  const translateItemArr = Object.values(definitionsMap);
  // 对所有中文名称处理
  const names = translateItemArr.map((item) => item.name);
  // 翻译所有的中文名称
  const result = translate ? await translateFn(names) : names;
  // 所有的定义名称修正
  translateItemArr.forEach((item, index) => {
    item.name = `${prefix}${formatName(result[index])}`;
    // console.log("item.name: ", item.name);
  });

  if (customContent) {
    await customContent(data, definitionsFile, transFormType);
  }
  // 生成所有的定义
  for (let name in definitionsMap) {
    const item = definitionsMap[name];
    const define = item.define;
    if (define.type === "object") {
      definitionsFile.addStatements(`/** ${item.originName} */\n`);
      const ins = definitionsFile.addInterface({
        name: item.name,
        isExported: true,
        properties: Object.keys(define.properties || {}).map<
          OptionalKind<PropertySignatureStructure>
        >((key) => ({
          name: key,
          type: transFormType(define.properties[key]),
          leadingTrivia: `/** ${define.properties[key].description} */\n`,
          hasQuestionToken: !define.required?.includes(key),
        })),
      });
      definitionsMap[name].ins = ins;
    }
  }
  definitionsFile.formatText();
};
