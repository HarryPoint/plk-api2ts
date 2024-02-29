## plk-api2ts

plk-api2ts 是一个高效的工程化工具，它可以将 Swagger（v2版本） 文档转换为 TypeScript 文件。这个工具的主要目标是自动化后端接口的类型定义，将其转换为前端代码，从而消除了手动编写类型定义的需求。

通过使用 plk-api2ts，你可以大大提高开发效率，减少错误，并确保前后端接口的类型一致性。这个工具特别适合在大型项目中使用，其中可能包含大量的接口和类型定义。

### 主要特性

1. 自动化：只需一次设置，就可以自动将后端的 Swagger 文档转换为 TypeScript 文件。
2. 准确性：通过直接从 Swagger 文档生成类型定义，可以确保前后端接口的类型一致性。
3. 高效率：消除了手动编写和更新类型定义的需求，从而大大提高了开发效率。

### 如何开始

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
    "api2ts": "api2ts",
  }
}
```

4. 运行命令， 自动生成接口类型定义

> 仅更新定义文件

```shell
npm run api2ts
```


### 配置项

| 选项名称            |                   描述                   |                                               类型                                                |                                   默认值 |
| :------------------ | :--------------------------------------: | :-----------------------------------------------------------------------------------------------: | ---------------------------------------: |
| output              |          文件生成目录(完整路径)          |                                              string                                               |    path.join(process.cwd(), "./autoApi") |
| serviceMap          |              需要转换的服务              |                                      Record<string, string>                                       |                                     null |
| serviceNameToPath   |       是否根据服务名称添加子级目录       |                                              boolean                                              |                                    false |
| translate           | 是否启用翻译（自动翻译中文为对应的英文） |                                              boolean                                              |                                     true |
| customContent       |            自定义文件添加内容            | ( data: any,  definitionsFile: SourceFile, transFormType: (arg: any) => string ) => Promise<void> |                             详见下方说明 |
| interfacePrefix     |           interface自定义前缀            |                                              string                                               |                                      'I' |
| enumPrefix          |            enum自定义定义前缀            |                                              string                                               |                                      'E' |
| createTsFile        |              是否生成ts文件              |                                              boolean                                              |    true (可以通过命令行 --ts=false 修改) |
| createJsonFile      |             是否生成json文件             |                                              boolean                                              |  false (可以通过命令行 --json=true 修改) |
| clearJsonFile       |             是否清理json文件             |                                              boolean                                              | false (可以通过命令行 --type=clear 修改) |
| transformOriginType |       自定义swagger内type类型转换        |                  (define: swagger) => "string"\| "number"\|"boolean"\|"[]"\|"{}"                  |                           详情见下方说明 |
| pathFilter          |      过滤目标项（用于更新单个接口）      |                                     (path: string) => boolean                                     |                               () => true |


### customContent 默认函数如下
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
        writer.writeLine(`* @author ${methodDefine?.["x-author"] || ""}`);
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
        writer.writeLine(`  method: "${method.toUpperCase()}",`);
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
* @author 张三
* @link http://yourdocpath/doc.html#/default/exportUsingPOST
*/
export default function fetchMethod(options: { data: IProcessDataSearchVO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/allocationOrder/export",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 流程数据搜索VO */
export interface IProcessDataSearchVO {
    /** undefined */
    showFieldSerialNoList?: string[];
    /** 全局搜索 */
    allSearch?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 字段搜索 */
    dataSearchList?: IProcessDataDetailsSearchVO[];
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 明细表表code，传值后，将会查询明细表数据 */
    tableColumnCode?: string;
    /** 当前的表单分组 */
    currentFormDataGrouping?: IFormDataGroupingDTO;
    /** 操作员工id */
    opUserId?: string;
    /** 操作角色id集 */
    opRoleIds?: string[];
    /** 操作部门id */
    opDeptId?: string;
}
/** 流程数据明细搜索VO */
export interface IProcessDataDetailsSearchVO {
    /** 列code */
    code: string;
    /** 搜索类型 */
    searchType: EProcessDataDetailsSearchVO_searchType;
    /** 搜索文本 - 针对文本搜索 */
    text?: string;
    /** 搜索起始值 - 针对范围搜索 */
    limitBegin?: Record<string, any>;
    /** 搜索结束值 - 针对范围搜索 */
    limitEnd?: Record<string, any>;
    /** 搜索选项值 - 针对选择搜索 */
    selectors?: Record<string, any>[];
    /** 表格编码 */
    tableCode?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** 表单数据分组DTO */
export interface IFormDataGroupingDTO {
    /** 分组字段序列 */
    groupingFieldSerialNo?: string;
    /** 分组字段编码 */
    groupFieldCode?: string;
    /** 分组的值， 如果是关联表单，则是ID */
    groupingValue?: string;
    /** 分组名称 */
    groupingName?: string;
    /** 下级分组 */
    children?: IFormDataGroupingDTO[];
    /** 级联表单数据，  级联表单的上下级关系  - Y, 多字段分组关系 - N */
    cascadeFormData?: EFormDataGroupingDTO_cascadeFormData;
    /** 多级基础数据上级ID */
    treeDataParentId?: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EProcessDataDetailsSearchVO_searchType {
    NONE = "NONE",
    EQ = "EQ",
    LIKE = "LIKE",
    RANGE = "RANGE",
    SELECTOR = "SELECTOR",
    IS_NULL = "IS_NULL",
    NOT_NULL = "NOT_NULL",
    NE = "NE",
    REGEXP = "REGEXP"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EFormDataGroupingDTO_cascadeFormData {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

```

### CASE

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

3. 自定义更新某一个接口
```bash
npx api2ts --filter=你的接口请求路径
```

4. 需要生成接口的swagger文件
```bash
npx api2ts --json=true
```

5. 需要清除生成的swagger文件
```bash
npx api2ts --type=clear
```

6. 当前已有swagger文件，想要转换为ts定义

```bash
npx api2ts --type=transform
```


### 功能清单

| 功能内容                   | 是否支持 |
| :------------------------- | -------: |
| 获取接口swagger数据        |       是 |
| 生成接口数据类型定义       |       是 |
| 接口定义名称翻译           |       是 |
| 接口定义翻译结果调整       |       是 |
| 自定义api服务              |       是 |
| 根据服务名称创建文件夹归类 |       是 |
| 自定义生成文件内容         |       是 |
| 单个接口数据更新           |       是 |

### :copyright: License

[MIT](http://opensource.org/licenses/MIT)

### 写在最后

欢迎大家提 issue, 但希望您能提供你的配置，或者给出类型转换有异常的swagger json 数据，描述清楚如何复现问题。我将不定期清理issue。最后希望大家都能愉快coding, 不用再写api相关的ts代码☺