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
        writer.writeLine(`import { ${method} } from '@/api/http';`);
        writer.writeLine(" ");
        const docUrl = `// http://${
          data.host
        }/doc.html#/default/${methodDefine.tags?.join("/")}/${
          methodDefine.operationId
        }`;
        console.log("docUrl: ", docUrl);
        writer.writeLine(docUrl);
      });
      const functionDeclaration = definitionsFile.addFunction({
        name: "fetchMethod",
        isDefaultExport: true,
      });
      const responseDefine = methodDefine.responses?.[200]?.schema;
      let bodyDefine: any;
      let queryDefine: any;
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
          queryDefine.schema.properties[paramsDefine.name] = paramsDefine;
        }
      });
      const defineArr = [bodyDefine, queryDefine].filter(Boolean);
      defineArr.forEach((defineItem) => {
        const name = defineItem.in === "body" ? "data" : "params";
        functionDeclaration.addParameter({
          name,
          type: transFormType(defineItem.schema),
        });
      });
      functionDeclaration.setBodyText((writer) => {
        writer.writeLine(
          `return ${method}<${
            responseDefine ? transFormType(responseDefine) : "any"
          }>({`
        );
        writer.writeLine(`  url: "${url}",`);
        defineArr?.forEach((paramsDefine: any) => {
          if (paramsDefine.in === "body") {
            writer.writeLine(`  data,`);
          }
          if (paramsDefine.in === "query") {
            writer.writeLine(`  params,`);
          }
        });
        writer.writeLine(`});`);
      });
    }
  }
};
