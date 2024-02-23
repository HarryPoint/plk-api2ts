import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/宝晶报表(收款汇总)相关/exportExcelUsingGET_3
export default function fetchMethod(params: { ticket: string }) {
    return get<IModelAndView['data']>({
      url: "/app-enterprise-web/api/app/enterprise/baoJingReportCollectionTotal/exportExcel",
      params,
    });
}
// ModelAndView
export interface IModelAndView {
}
