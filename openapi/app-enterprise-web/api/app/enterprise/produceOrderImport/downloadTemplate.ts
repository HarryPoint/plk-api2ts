import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/生产订单导入相关/downloadTemplateUsingGET_1
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<any>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrderImport/downloadTemplate",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
