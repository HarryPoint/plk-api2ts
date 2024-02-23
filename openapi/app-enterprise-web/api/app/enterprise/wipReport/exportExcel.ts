import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/WIP报表相关/exportExcelUsingGET_16
export default function fetchMethod(params: { ticket: string }) {
    return get<IModelAndView['data']>({
      url: "/app-enterprise-web/api/app/enterprise/wipReport/exportExcel",
      params,
    });
}
// ModelAndView
export interface IModelAndView {
}
