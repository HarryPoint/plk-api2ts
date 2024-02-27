import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/宝晶报表(收款汇总)相关/exportExcelUsingGET_3
*/
export default function fetchMethod(options: { params: { ticket?: string } }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/baoJingReportCollectionTotal/exportExcel",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** ModelAndView */
export interface IModelAndView {
}
