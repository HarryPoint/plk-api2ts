import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/宝晶报表(销售发货分析)相关/exportExcelUsingGET_6
export default function fetchMethod(params: { ticket: string }) {
    return get<IModelAndView['data']>({
      url: "/app-enterprise-web/api/app/enterprise/baoJingReportSalesDeliver/exportExcel",
      params,
    });
}
// ModelAndView
export interface IModelAndView {
}
