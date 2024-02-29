import { OptionalKind, PropertySignatureStructure, SourceFile } from "ts-morph";
import { IConfig } from "./config";
import { translate as translateFn } from "./translate";

// 去除所有的特殊字符
const formatName = (name: string) =>
  name.replace(/[、,，'/《》«»()（）-\s]/gi, "");

type IDefinitionsMapItem = {
  name: string;
  translateName: string;
  originName: string;
  ins: any;
  define: any;
};

const formatEnumValue = (str: string) => {
  return str.trim().split(/-(.+)/, 2);
};

export const createDefinitions = async (
  definitionsFile: SourceFile,
  data: any,
  option: {
    translate?: boolean;
    prefix?: string;
    enumPrefix?: string;
    transformOriginType: (define: any) => string;
    customContent?: IConfig["customContent"];
  }
) => {
  const {
    translate = true,
    prefix = "I",
    enumPrefix = "E",
    transformOriginType,
    customContent,
  } = option || {};
  const definitionsMap: Record<string, IDefinitionsMapItem> = {};
  const enumMap: Record<string, any[]> = {};

  const transFormType = (define: any, pathKeys: string[] = []): string => {
    if (define.originalRef) {
      if (!definitionsMap[define.originalRef]) {
        // 可能存在无定义的类型
        return "any";
      }
      return definitionsMap[define.originalRef].name;
    }
    const typeOrigin = transformOriginType(define);
    if (typeOrigin === "[]") {
      return `${transFormType(define.items, [...pathKeys, "items"])}[]`;
    }
    if (typeOrigin === "{}") {
      if (define.properties) {
        const requiredKeys = define.required || [];
        return `{ ${Object.keys(define.properties || {})
          .map((key) => {
            const formatKey = formatName(key);
            return `${formatKey}${
              requiredKeys.includes(key) ? "" : "?"
            }: ${transFormType(define.properties[key], [
              ...pathKeys,
              formatKey,
            ])}`;
          })
          .join("; ")} }`;
      }
      return `Record<string, ${
        define?.additionalProperties
          ? transFormType(define?.additionalProperties, [
              ...pathKeys,
              "additionalProperties",
            ])
          : "any"
      }>`;
    }
    if (typeOrigin === "string" && define.enum) {
      const enumName = `${enumPrefix}${pathKeys.map((item) => item).join("_")}`;
      enumMap[enumName] = define.enum;
      return enumName;
    }
    return typeOrigin;
  };

  // 记录所有的定义
  // console.log("data.definitions: ", data.definitions);
  for (let name in data.definitions) {
    const define = data.definitions[name];
    if (define && define.type === "object") {
      definitionsMap[name] = {
        name: formatName(name),
        translateName: formatName(name),
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
    const translateName = formatName(result[index]);
    item.name = `${prefix}${translateName}`;
    item.translateName = translateName;
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
          type: transFormType(define.properties[key], [
            item.translateName,
            key,
          ]),
          leadingTrivia: `/** ${define.properties[key].description} */\n`,
          hasQuestionToken: !define.required?.includes(key),
        })),
      });
      definitionsMap[name].ins = ins;
    }
  }
  Object.keys(enumMap).forEach((key) => {
    definitionsFile.addEnum({
      name: key,
      isExported: true,
      members: enumMap[key].map((enumKey) => {
        const [name, desc] = formatEnumValue(enumKey);
        return {
          name,
          value: name,
          leadingTrivia: desc ? `/** ${desc} */\n` : "",
        };
      }),
    });
  });
  definitionsFile.formatText();
};
