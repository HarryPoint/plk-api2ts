import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/报废统计/exportExcelUsingGET_7
export default function fetchMethod(params: { ticket: string }) {
    return get<IModelAndView['data']>({
      url: "/app-enterprise-web/api/app/enterprise/baoJingReportScrap/exportExcel",
      params,
    });
}
// ModelAndView
export interface IModelAndView {
}
