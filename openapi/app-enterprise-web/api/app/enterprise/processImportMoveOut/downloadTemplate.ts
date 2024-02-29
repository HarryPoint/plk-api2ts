import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.139.107:16400/doc.html#/default/出料数据导入相关/downloadTemplateUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<any>(
        {
            url: "/app-enterprise-web/api/app/enterprise/processImportMoveOut/downloadTemplate",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
