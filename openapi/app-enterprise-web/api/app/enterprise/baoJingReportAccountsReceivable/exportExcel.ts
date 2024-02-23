import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/宝晶报表(应收账款分析)相关/exportExcelUsingGET_2
export default function fetchMethod(params: { ticket: string }) {
    return get<IModelAndView['data']>({
      url: "/app-enterprise-web/api/app/enterprise/baoJingReportAccountsReceivable/exportExcel",
      params,
    });
}
// ModelAndView
export interface IModelAndView {
}
