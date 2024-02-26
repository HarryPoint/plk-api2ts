import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产订单导入相关/downloadTemplateUsingGET_1
*/
export default function fetchMethod(params: { enterpriseId: number }, extraOptions?: any) {
    return http<any>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrderImport/downloadTemplate",
            method: "get",
            params,
        },
        extraOptions,
    );
}
