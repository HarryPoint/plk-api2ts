import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/宝晶售后质量分析报表相关/exportConsignmentLossAnalyzeExcelUsingGET
export default function fetchMethod(params: { ticket: string }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/afterSalesQualityReport/exportExcel",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// ModelAndView
export interface IModelAndView {
}
