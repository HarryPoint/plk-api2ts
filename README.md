## plk-api2ts

plk-api2ts 是一个高效的工程化工具，它可以将 Swagger 文档转换为 TypeScript 文件。这个工具的主要目标是自动化后端接口的类型定义，将其转换为前端代码，从而消除了手动编写类型定义的需求。

通过使用 plk-api2ts，你可以大大提高开发效率，减少错误，并确保前后端接口的类型一致性。这个工具特别适合在大型项目中使用，其中可能包含大量的接口和类型定义。

## 主要特性

自动化：只需一次设置，就可以自动将后端的 Swagger 文档转换为 TypeScript 文件。
准确性：通过直接从 Swagger 文档生成类型定义，可以确保前后端接口的类型一致性。
高效率：消除了手动编写和更新类型定义的需求，从而大大提高了开发效率。

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

# 仅更新定义文件

```shell
npm run api2json
```

# 更新 json 数据，同时生成新定义

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
| customContent     |            自定义文件添加内容            | ( data: any,  definitionsFile: SourceFile, transFormType: (arg: any) => string ) => Promise<void> |                              () => '' |
| prefix            |               类型定义前缀               |                                              string                                               |                                   'I' |

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

## :copyright: License

[MIT](http://opensource.org/licenses/MIT)
