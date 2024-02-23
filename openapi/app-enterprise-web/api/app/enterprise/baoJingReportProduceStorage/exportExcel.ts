import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/库存统计（成品）日报表/exportExcelUsingGET_4
export default function fetchMethod(params: { ticket: string }) {
    return get<IModelAndView['data']>({
      url: "/app-enterprise-web/api/app/enterprise/baoJingReportProduceStorage/exportExcel",
      params,
    });
}
// ModelAndView
export interface IModelAndView {
}
