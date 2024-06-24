## plk-api2ts

plk-api2ts is an efficient engineering tool that can convert Swagger (version 2) documents into TypeScript files. The main goal of this tool is to automate the type definitions of backend interfaces, convert them into frontend code, thereby eliminating the need for manual type definition writing.

By using plk-api2ts, you can greatly improve development efficiency, reduce errors, and ensure the type consistency of front-end and back-end interfaces. This tool is particularly suitable for use in large projects, which may contain a large number of interfaces and type definitions.

English | [简体中文](./README.zh-CN.md)

### Main Features

1. Automation: With just one-time setup, you can automatically convert backend Swagger documents into TypeScript files.
2. Accuracy: By generating type definitions directly from Swagger documents, you can ensure the type consistency of front-end and back-end interfaces.
3. High Efficiency: The need for manual writing and updating of type definitions is eliminated, greatly improving development efficiency.
4. Convenience: It can be used as a command-line tool to directly convert Swagger data into TypeScript files, and it also supports clearing Swagger JSON data files after conversion.

### How to Get Started

1. Installation

```shell
npm install plk-api2ts -D
```

1. Add a configuration file `api2ts.config.js`(this can be omitted if only using the command-line tool to convert Swagger to TypeScript)

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

3. Configure Commands

```json
{
  "scripts": {
    "api2ts": "api2ts",
  }
}
```

4. Run the command to automatically generate interface type definitions.

> Only update the definition files.

```shell
npm run api2ts
```

5. View Help Information
```shell
npx api2ts --help
```


### Configuration

| options             |                                                                    desc                                                                    |                                               type                                                |                                default |
| :------------------ | :----------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | -------------------------------------: |
| output              |                                                   File Generation Directory (Full Path)                                                    |                                              string                                               |   path.join(process.cwd(), "./api2ts") |
| serviceMap          |                                                          Services to be Converted                                                          |                                      Record<string, string>                                       |                                   null |
| serviceNameToPath   |                                            Whether to Add Subdirectories Based on Service Name                                             |                                              boolean                                              |                                  false |
| apiPath             |                                   Path of the Type Data Request (Fill in according to actual situation)                                    |                                              string                                               |        "/v2/api-docs" (--api-path=xxx) |
| translate           |                         Whether to Enable Translation (Automatically Translate Chinese into Corresponding English)                         |                                              boolean                                              |            false（ --translate=true ） |
| contentTemplate     |                                                          Custom Content Template                                                           |                                    See the explanation below.                                     |             See the explanation below. |
| customContent       |                                                      Customize File Addition Content                                                       | ( data: any,  definitionsFile: SourceFile, transFormType: (arg: any) => string ) => Promise<void> |             See the explanation below. |
| interfacePrefix     |                                                        Custom Prefix for interface                                                         |                                              string                                               |                                    'I' |
| enumPrefix          |                                                           Custom Prefix for enum                                                           |                                              string                                               |                                    'E' |
| createTsFile        |                                                             Generate ts Files                                                              |                                              boolean                                              |                    true ( --ts=false ) |
| createJsonFile      |                                                            Generate json Files                                                             |                                              boolean                                              |                  false ( --json=true ) |
| clearJsonFile       |                                                            Clean Up json Files                                                             |                                              boolean                                              |                 false ( --type=clear ) |
| newLineKind         |                                                            End of Line Sequence                                                            |                                           'CRLF'\|'LF'                                            |                     'LF'( --nlk=CRLF ) |
| sort                | When generating interfaces, sort member names (the order of data content keys is unstable, enabling this can prevent invalid file changes) |                                              boolean                                              |                   false (--sort=true ) |
| transformOriginType |                                           Customize the Conversion of Type Types within Swagger                                            |                  (define: swagger) => "string"\| "number"\|"boolean"\|"[]"\|"{}"                  | See the details below for explanation. |
| pathFilter          |                                         Filter Target Items (Used for Updating a Single Interface)                                         |                                     (path: string) => boolean                                     |                             () => true |

###  `contentTemplate` default value
> Will eventually be consumed by  ·customContent·
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
By using custom templates, over 90% of custom scenarios can be satisfied.

### `customContent`default value
> Unless you have a 100% custom content requirement, it is more recommended to use contentTemplate to configure your custom content.
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
Result Example
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

###  `transformOriginType`default value

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

1. Customize the Content Generated When Adding Files
```javascript
const path = require("path");

module.exports = () => {
  return {
    output: path.resolve(__dirname, "./autoApi"),
    serviceMap: {
      yourServiceName: "your api path",
    },
    // Satisfies over 90% of custom content requirements
    contentTemplate: 'Your Custom Content',
    // Only use when you need to fully customize your file content
    customContent: () => '// Custom Content'
  };
};
```

2. The automatically generated translation name does not meet the requirements.
Modify the dictionary content in translateCache.json and re-execute the code generation logic. 
```bash
npm run api2ts
```

3. Customize the Update of a Specific Interface
```bash
npx api2ts --filter=Your Interface Request Path
```

4. Swagger file needed to generate the interface
```bash
npx api2ts --json=true
```

5. Need to clear the generated swagger files.
```bash
npx api2ts --type=clear
```

6. Currently have a Swagger file and want to convert it to TS definitions.
```bash
npx api2ts --type=transform
```
7. Specify the Swagger files in the conversion folder to TypeScript.
```bash
npx api2ts --type=transform --target=./your_path
```

7. Specify the Swagger files in the conversion folder to TypeScript and translate the interface names into English.
```bash
npx api2ts --type=transform --target=./your_path --translate=true
```

8. Clear the Swagger files in the conversion folder.
```bash
npx api2ts --type=clear --target=./your_path
```

### Feature List

| Feature                                                                | Supported |
| :--------------------------------------------------------------------- | --------: |
| Fetch Interface Swagger Data                                           |       yes |
| Generate Interface Data Type Definitions                               |       yes |
| Translate Interface Definition Names                                   |       yes |
| Adjust Translation Results of Interface Definitions                    |       yes |
| Customize API Services                                                 |       yes |
| Create Folders and Classify According to Service Names                 |       yes |
| Customize File Content Template                                        |       yes |
| Customize Generated File Content                                       |       yes |
| Update Single Interface Data                                           |       yes |
| Convert the Swagger data files in the specified folder into TypeScript |       yes |
| Clean up Swagger json Data Files                                       |       yes |

### :copyright: License

[MIT](http://opensource.org/licenses/MIT)

### In Conclusion

Everyone is welcome to raise issues, but I hope you can provide your configuration, or provide the swagger json data where the type conversion is abnormal, and clearly describe how to reproduce the problem. I will clean up issues irregularly. Finally, I hope everyone can enjoy coding, and no longer need to write ts code related to api ☺