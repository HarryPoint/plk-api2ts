import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/初始化引擎 - 导入模板相关/downloadNewTemplateUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<any>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/importTemplate/download",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
