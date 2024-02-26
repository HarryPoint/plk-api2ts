import { SourceFile } from "ts-morph";

// plk 特有文件头内容
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
        writer.writeLine(`import { http } from '@/api/http';`);
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
      defineArr.forEach((defineItem) => {
        const name = defineItem.in === "body" ? "data" : "params";
        functionDeclaration.addParameter({
          name,
          type: transFormType(defineItem.schema),
        });
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
        defineArr?.forEach((paramsDefine: any) => {
          if (paramsDefine.in === "body") {
            writer.writeLine(`  data,`);
          }
          if (paramsDefine.in === "query") {
            writer.writeLine(`  params,`);
          }
        });
        writer.writeLine(`},`);
        writer.writeLine(`extraOptions,`);
        writer.writeLine(`);`);
      });
    }
  }
};
