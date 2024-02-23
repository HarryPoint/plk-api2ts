import { get } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/质量月报报表相关/exportUsingGET
export default function fetchMethod(params: { ticket: string }) {
    return get<IModelAndView['data']>({
      url: "/app-enterprise-web/api/app/enterprise/qmsQualityMonthReport/export",
      params,
    });
}
// ModelAndView
export interface IModelAndView {
}
