import { SourceFile } from "ts-morph";

const template = `
import { http } from "@/api/http";

/**
* @author <% author %> 
* @desc <% desc %>
* @link <% docUrl %>
*/
export default function fetchMethod(options: <% argumentsDefine %> , extraOptions?: any) {
    return http<<% responseDefine %>>(
        {
            url: "<% path %> ",
            method: "<% method %> ",
            ...options,
        },
        extraOptions,
    );
}

`;
interface ITypeInfo {
  // 接口地址
  docUrl: string;
  // 接口作者
  author: string;
  // 接口说明
  desc: string;
  // 参数定义
  argumentsDefine: string;
  // 返回值定义
  responseDefine: string;
  // 请求地址
  path: string;
  // 请求方式定义
  method: string;
}

// plk 特有文件头内容
export const customContent = async (
  data: any,
  definitionsFile: SourceFile,
  transFormType: (arg: any) => string
) => {
  const typeInfoArr: ITypeInfo[] = [];
  for (let url in data.paths) {
    const fetchDefines = data.paths[url];
    for (let methodStr in fetchDefines) {
      const methodDefine = fetchDefines[methodStr];
      const docUrl = `http://${
        data.host
      }/doc.html#/default/${methodDefine.tags?.join("/")}/${
        methodDefine.operationId
      }`;
      const author = methodDefine?.["x-author"] || "";
      const desc = methodDefine?.["summary"] || "";
      const path = url;
      const method = methodStr.toUpperCase();
      const responseDefineSchema = methodDefine.responses?.[200]?.schema;
      const responseDefine = responseDefineSchema
        ? `${transFormType(responseDefineSchema)}`
        : "any";
      let bodyDefine: any;
      let queryDefine: any;
      let arrayQueryDefineMap: Record<string, any> = {};
      methodDefine.parameters?.forEach((paramsDefine: any) => {
        if (paramsDefine.in === "body") {
          bodyDefine = paramsDefine;
        }
        if (paramsDefine.in === "query") {
          if (!queryDefine) {
            queryDefine = {
              in: "query",
              schema: {
                type: "object",
                properties: {},
              },
            };
          }
          if (paramsDefine.name.includes("[0]")) {
            const keyArr = paramsDefine.name.split("[0].");
            const name = keyArr[0];
            const key = keyArr[1];
            let targetDefine = arrayQueryDefineMap[name];
            if (!targetDefine) {
              targetDefine = {
                type: "array",
                items: {
                  type: "object",
                  properties: {},
                },
              };
            }
            targetDefine.items.properties[key] = paramsDefine;
            arrayQueryDefineMap[name] = targetDefine;
          } else {
            queryDefine.schema.properties[paramsDefine.name] = paramsDefine;
          }
        }
      });
      if (queryDefine) {
        queryDefine.schema.properties = {
          ...queryDefine.schema.properties,
          ...arrayQueryDefineMap,
        };
      }
      const defineArr = [bodyDefine, queryDefine].filter(Boolean);
      const argumentsDefine = (() => {
        let str = "{";
        defineArr.forEach((defineItem, index) => {
          const name = defineItem.in === "body" ? "data" : "params";
          if (index) {
            str += ",";
          }
          str += `${name}: ${transFormType(defineItem.schema)}`;
        });
        return str;
      })();

      typeInfoArr.push({
        docUrl,
        author,
        desc,
        argumentsDefine,
        responseDefine,
        path,
        method,
      });
    }
  }
  typeInfoArr.forEach((typeInfo) => {
    let str = template;
    Object.keys(typeInfo).forEach((key) => {
      str.replace(`<% ${key} %>`, typeInfo[key as keyof ITypeInfo]);
    });
    definitionsFile.addStatements(str);
  });
};

// plk 特有转换逻辑
export const transformOriginType = (define: any): string => {
  const typeName = `${define.type}${define.format ? `(${define.format})` : ""}`;

  const defaultTypeMap = {
    string: "string",
    "string(date-time)": "string",
    "string(date)": "string",
    integer: "number",
    "integer(int64)": "string",
    "integer(int32)": "number",
    number: "number",
    boolean: "boolean",
    array: "[]",
    object: "{}",
  };
  return defaultTypeMap[typeName as keyof typeof defaultTypeMap] as string;
};
