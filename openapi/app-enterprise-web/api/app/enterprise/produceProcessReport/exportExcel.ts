import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/产出报表(按工序统计)相关/exportExcelUsingGET_14
export default function fetchMethod(params: { ticket: string }) {
    return get<IModelAndView['data']>({
      url: "/app-enterprise-web/api/app/enterprise/produceProcessReport/exportExcel",
      params,
    });
}
// ModelAndView
export interface IModelAndView {
}
