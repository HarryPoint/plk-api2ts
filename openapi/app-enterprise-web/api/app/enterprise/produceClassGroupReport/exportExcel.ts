import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/产出报表(按班组统计)相关/exportExcelUsingGET_11
export default function fetchMethod(params: { ticket: string }) {
    return get<IModelAndView['data']>({
      url: "/app-enterprise-web/api/app/enterprise/produceClassGroupReport/exportExcel",
      params,
    });
}
// ModelAndView
export interface IModelAndView {
}
