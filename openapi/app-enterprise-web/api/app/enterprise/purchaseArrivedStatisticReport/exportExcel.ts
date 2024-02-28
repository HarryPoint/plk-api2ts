import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/宝晶采购到货统计报表相关/exportConsignmentLossAnalyzeExcelUsingGET_1
*/
export default function fetchMethod(options: { params: { ticket?: string } }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/purchaseArrivedStatisticReport/exportExcel",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** ModelAndView */
export interface IModelAndView {
}
