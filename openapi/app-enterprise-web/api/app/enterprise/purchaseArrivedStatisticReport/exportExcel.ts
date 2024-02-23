import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/宝晶采购到货统计报表相关/exportConsignmentLossAnalyzeExcelUsingGET_1
export default function fetchMethod(params: { ticket: string }) {
    return get<IModelAndView['data']>({
      url: "/app-enterprise-web/api/app/enterprise/purchaseArrivedStatisticReport/exportExcel",
      params,
    });
}
// ModelAndView
export interface IModelAndView {
}
