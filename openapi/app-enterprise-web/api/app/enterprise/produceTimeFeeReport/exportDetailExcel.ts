import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/工时工费相关/exportDetailExcelUsingGET
export default function fetchMethod(params: { ticket: string }) {
    return get<IModelAndView['data']>({
      url: "/app-enterprise-web/api/app/enterprise/produceTimeFeeReport/exportDetailExcel",
      params,
    });
}
// ModelAndView
export interface IModelAndView {
}
