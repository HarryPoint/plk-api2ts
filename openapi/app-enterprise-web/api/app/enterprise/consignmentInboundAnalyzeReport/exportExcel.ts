import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/宝晶寄售入库报表相关/exportExcelUsingGET
*/
export default function fetchMethod(options: { params: { ticket?: string } }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/consignmentInboundAnalyzeReport/exportExcel",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** ModelAndView */
export interface IModelAndView {
}
