import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/WIP报表相关/exportExcelUsingGET_16
export default function fetchMethod(params: { ticket: string }) {
    return http<IModelAndView>({
        url: "/app-enterprise-web/api/app/enterprise/wipReport/exportExcel",
        method: "get",
        params,
    });
}
// ModelAndView
export interface IModelAndView {
}
