## plk-api2ts

plk-api2ts 是一个高效的工程化工具，它可以将 Swagger（v2版本） 文档转换为 TypeScript 文件。这个工具的主要目标是自动化后端接口的类型定义，将其转换为前端代码，从而消除了手动编写类型定义的需求。

通过使用 plk-api2ts，你可以大大提高开发效率，减少错误，并确保前后端接口的类型一致性。这个工具特别适合在大型项目中使用，其中可能包含大量的接口和类型定义。

## 主要特性

1. 自动化：只需一次设置，就可以自动将后端的 Swagger 文档转换为 TypeScript 文件。
2. 准确性：通过直接从 Swagger 文档生成类型定义，可以确保前后端接口的类型一致性。
3. 高效率：消除了手动编写和更新类型定义的需求，从而大大提高了开发效率。

## 如何开始

1. 安装

```shell
npm install plk-api2ts -D
```

2. 添加配置文件 `api2ts.config.js`

```javascript
const path = require("path");

module.exports = () => {
  return {
    output: path.resolve(__dirname, "./autoApi"),
    serviceMap: {
      yourServiceName: "your api path",
    },
  };
};
```

3. 配置命令

```json
{
  "scripts": {
    "api2json": "api2json",
    "api2ts": "api2ts",
    "api:update": "npm run api2json && npm run api2ts"
  }
}
```

4. 运行命令， 自动生成接口类型定义

> 仅更新定义文件

```shell
npm run api2json
```

> 仅根据数据文件生成新的定义文件

```shell
npm run api2ts
```

> 更新 json 数据，同时生成新定义

```shell
npm run api:update
```

## 配置项

| 选项名称          |                   描述                   |                                               类型                                                |                                默认值 |
| :---------------- | :--------------------------------------: | :-----------------------------------------------------------------------------------------------: | ------------------------------------: |
| output            |          文件生成目录(完整路径)          |                                              string                                               | path.join(process.cwd(), "./autoApi") |
| serviceMap        |              需要转换的服务              |                                      Record<string, string>                                       |                                  null |
| serviceNameToPath |       是否根据服务名称添加子级目录       |                                              boolean                                              |                                 false |
| translate         | 是否启用翻译（自动翻译中文为对应的英文） |                                              boolean                                              |                                  true |
| customContent     |            自定义文件添加内容            | ( data: any,  definitionsFile: SourceFile, transFormType: (arg: any) => string ) => Promise<void> |                          详见下方说明 |
| prefix            |               类型定义前缀               |                                              string                                               |                                   'I' |

## customContent 默认函数如下
```javascript
import { SourceFile } from "ts-morph";

export const customContent = async (
  data: any,
  definitionsFile: SourceFile,
  transFormType: (arg: any) => string
) => {
  for (let url in data.paths) {
    const fetchDefines = data.paths[url];
    for (let method in fetchDefines) {
      const methodDefine = fetchDefines[method];
      definitionsFile.addStatements((writer) => {
        writer.writeLine(`import { http } from "@/api/http";`);
        writer.writeLine(" ");
        writer.writeLine("/**");
        const docUrl = `http://${
          data.host
        }/doc.html#/default/${methodDefine.tags?.join("/")}/${
          methodDefine.operationId
        }`;
        writer.writeLine(`* @link ${docUrl}`);
        writer.writeLine("*/");
        console.log("docUrl: ", docUrl);
      });
      const functionDeclaration = definitionsFile.addFunction({
        name: "fetchMethod",
        isDefaultExport: true,
      });
      const responseDefine = methodDefine.responses?.[200]?.schema;
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
      functionDeclaration.addParameter({
        name: "options",
        initializer: (writer) => {
          if (defineArr.length === 0) {
            writer.write("{}");
          }
        },
        type: (writer) => {
          writer.write("{");
          defineArr.forEach((defineItem, index) => {
            const name = defineItem.in === "body" ? "data" : "params";
            if (index) {
              writer.write(",");
            }
            writer.write(`${name}: ${transFormType(defineItem.schema)}`);
          });
          writer.write("}");
        },
      });
      functionDeclaration.addParameter({
        name: "extraOptions",
        type: "any",
        hasQuestionToken: true,
      });
      functionDeclaration.setBodyText((writer) => {
        writer.writeLine(
          `return http<${
            responseDefine ? `${transFormType(responseDefine)}` : "any"
          }>(`
        );
        writer.writeLine(`  {`);
        writer.writeLine(`  url: "${url}",`);
        writer.writeLine(`  method: "${method}",`);
        writer.writeLine(`  ...options,`);
        writer.writeLine(`},`);
        writer.writeLine(`extraOptions,`);
        writer.writeLine(`);`);
      });
    }
  }
};

```
结果示例
```javascript
import { http } from "@/api/http";

/**
* @link http://yourserviceapi/doc.html#/default/安利康大屏相关/getCategorySelectorUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListNameNumberVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/alk/dashBoard/getCategorySelector",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«名称，编号VO»» */
export interface IJSONResultListNameNumberVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: INameNumberVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 名称，编号VO */
export interface INameNumberVO {
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
}

```

## CASE

1. 自定义添加文件生成内容
```javascript
const path = require("path");

module.exports = () => {
  return {
    output: path.resolve(__dirname, "./autoApi"),
    serviceMap: {
      yourServiceName: "your api path",
    },
    customContent: () => '// 自定义内容'
  };
};
```

2. 自动生成的翻译名称不符合要求
修改 translateCache.json 中字典内容，重新执行代码生成逻辑 `npm run api2ts`


## 功能清单

| 功能内容                   | 是否支持 |
| :------------------------- | -------: |
| 接口数据同步               |       是 |
| 接口数据类型定义自动生成   |       是 |
| 接口定义名称翻译           |       是 |
| 接口定义翻译结果调整       |       是 |
| 自定义api服务              |       是 |
| 根据服务名称创建文件夹归类 |       是 |
| 自定义生成文件内容         |       是 |

## :copyright: License

[MIT](http://opensource.org/licenses/MIT)
