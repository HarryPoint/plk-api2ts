import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/宝晶售后质量分析报表相关/exportConsignmentLossAnalyzeExcelUsingGET
export default function fetchMethod(params: { ticket: string }) {
    return get<IModelAndView['data']>({
      url: "/app-enterprise-web/api/app/enterprise/afterSalesQualityReport/exportExcel",
      params,
    });
}
// ModelAndView
export interface IModelAndView {
}
