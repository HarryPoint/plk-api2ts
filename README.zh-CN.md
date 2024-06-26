# plk-api2ts

[![NPM][npm-version-image]][npm-version-url]

plk-api2ts 是一个高效的工程化工具，它可以将 Swagger（v2版本） 文档转换为 TypeScript 文件。这个工具的主要目标是自动化后端接口的类型定义，将其转换为前端代码，从而消除了手动编写类型定义的需求。

通过使用 plk-api2ts，你可以大大提高开发效率，减少错误，并确保前后端接口的类型一致性。这个工具特别适合在大型项目中使用，其中可能包含大量的接口和类型定义。

[English](./README.md) | 简体中文

### 主要特性

1. 自动化：只需一次设置，就可以自动将后端的 Swagger 文档转换为 TypeScript 文件。
2. 准确性：通过直接从 Swagger 文档生成类型定义，可以确保前后端接口的类型一致性。
3. 高效率：消除了手动编写和更新类型定义的需求，从而大大提高了开发效率。
4. 便捷性：可以作为命令行工具直接转换swagger数据为 TypeScript 文件，同时支持转换后清除swagger JSON 数据文件。

### 如何开始

1. 安装

```shell
npm install plk-api2ts -D
```

2. 添加配置文件 `api2ts.config.js`（如果仅做命令行工具转换swagger为TypeScript可以省略）

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

5. 帮助信息查看
```shell
npx api2ts --help
```


### 配置项

| 选项名称            |                                        描述                                        |                                               类型                                                |                               默认值 |
| :------------------ | :--------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | -----------------------------------: |
| output              |                               文件生成目录(完整路径)                               |                                              string                                               | path.join(process.cwd(), "./api2ts") |
| serviceMap          |                                   需要转换的服务                                   |                                      Record<string, string>                                       |                                 null |
| serviceNameToPath   |                            是否根据服务名称添加子级目录                            |                                              boolean                                              |                                false |
| apiPath             |                      类型数据请求的路径地址(根据实际情况填写)                      |                                              string                                               | "/v2/api-docs" (--api-path=xxx 修改) |
| translate           |                      是否启用翻译（自动翻译中文为对应的英文）                      |                                              boolean                                              |      false（ --translate=true 修改） |
| contentTemplate     |                                   自定义内容模板                                   |                                            见下方说明                                             |                         详见下方说明 |
| customContent       |                                 自定义文件添加内容                                 | ( data: any,  definitionsFile: SourceFile, transFormType: (arg: any) => string ) => Promise<void> |                         详见下方说明 |
| interfacePrefix     |                                interface自定义前缀                                 |                                              string                                               |                                  'I' |
| enumPrefix          |                                 enum自定义定义前缀                                 |                                              string                                               |                                  'E' |
| createTsFile        |                                   是否生成ts文件                                   |                                              boolean                                              |              true ( --ts=false 修改) |
| createJsonFile      |                                  是否生成json文件                                  |                                              boolean                                              |            false ( --json=true 修改) |
| clearJsonFile       |                                  是否清理json文件                                  |                                              boolean                                              |           false ( --type=clear 修改) |
| newLineKind         |                                      行尾序列                                      |                                           'CRLF'\|'LF'                                            |               'LF'( --nlk=CRLF 修改) |
| sort                | 生成interface时，对成员名称排序(数据内容key顺序不稳定，开启可以防止无效的文件变更) |                                              boolean                                              |             false (--sort=true 修改) |
| transformOriginType |                            自定义swagger内type类型转换                             |                  (define: swagger) => "string"\| "number"\|"boolean"\|"[]"\|"{}"                  |                       详情见下方说明 |
| pathFilter          |                           过滤目标项（用于更新单个接口）                           |                                     (path: string) => boolean                                     |                           () => true |

### 默认 `contentTemplate`
> 最终会被 ·customContent·消费
```javascript
export const contentTemplate = `import { http } from "@/api/http";
/**
* @author <% author %> 
* @desc <% desc %>
* @link <% docUrl %>
*/
export default function fetchMethod(options: <% argumentsDefine %> , extraOptions?: any) {
    return http<<% responseDefine %>>(
        {
            url: "<% path %>",
            method: "<% method %>",
            ...options,
        },
        extraOptions,
    );
}
`;
```
通过自定义模板可以满足 ·90%·以上的自定义场景

### 默认 `customContent`
> 除非你有 100% 自定义内容的需求，否则更加推荐使用 contentTemplate 配置你的自定义内容
```javascript
import { SourceFile } from "ts-morph";

export const customContent = async (
  data: any,
  definitionsFile: SourceFile,
  contentTemplate: string,
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
        str += "}";
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
    let str = contentTemplate;
    console.log("contentTemplate: ", contentTemplate);
    Object.keys(typeInfo).forEach((key) => {
      const target = `<% ${key} %>`;
      str = str.replace(target, typeInfo[key as keyof ITypeInfo]);
    });
    definitionsFile.addStatements(str);
  });
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

### 默认 `transformOriginType`

```javascript
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
    // 满足 90% 以上的自定义内容的需求
    contentTemplate: '你的自定义内容',
    // 仅当你需要完全自定义你的文件内容时使用
    customContent: () => '// 自定义内容'
  };
};
```

2. 自动生成的翻译名称不符合要求
修改 translateCache.json 中字典内容，重新执行代码生成逻辑 
```bash
npm run api2ts
```

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
7. 指定转换文件夹下的swagger 文件为 TypeScript
```bash
npx api2ts --type=transform --target=./your_path
```

7. 指定转换文件夹下的swagger 文件为 TypeScript 并且将 interface 名称翻译为英文
```bash
npx api2ts --type=transform --target=./your_path --translate=true
```

8. 清除转换文件夹下的swagger 文件
```bash
npx api2ts --type=clear --target=./your_path
```

### 功能清单

| 功能内容                                         | 是否支持 |
| :----------------------------------------------- | -------: |
| 获取接口swagger数据                              |       是 |
| 生成接口数据类型定义                             |       是 |
| 接口定义名称翻译                                 |       是 |
| 接口定义翻译结果调整                             |       是 |
| 自定义api服务                                    |       是 |
| 根据服务名称创建文件夹归类                       |       是 |
| 自定义文件内容模板                               |       是 |
| 自定义生成文件内容                               |       是 |
| 单个接口数据更新                                 |       是 |
| 对指定文件夹下的swagger数据文件转换为 TypeScript |       是 |
| 清理swagger json 数据文件                        |       是 |

### :copyright: License

[MIT](http://opensource.org/licenses/MIT)

### 写在最后

欢迎大家提 issue, 但希望您能提供你的配置，或者给出类型转换有异常的swagger json 数据，描述清楚如何复现问题。我将不定期清理issue。最后希望大家都能愉快coding, 不用再写api相关的ts代码☺

[npm-version-image]: https://img.shields.io/npm/v/plk-api2ts.svg?style=flat-square
[npm-version-url]: https://www.npmjs.com/package/plk-api2ts