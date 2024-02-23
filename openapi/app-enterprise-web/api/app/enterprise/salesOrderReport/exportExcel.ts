import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/订单进度统计报表相关/exportExcelUsingGET_15
export default function fetchMethod(params: { ticket: string }) {
    return get<IModelAndView['data']>({
      url: "/app-enterprise-web/api/app/enterprise/salesOrderReport/exportExcel",
      params,
    });
}
// ModelAndView
export interface IModelAndView {
}
