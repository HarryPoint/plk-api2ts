import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/报废统计/exportExcelUsingGET_7
export default function fetchMethod(params: { ticket: string }) {
    return http<IModelAndView>({
        url: "/app-enterprise-web/api/app/enterprise/baoJingReportScrap/exportExcel",
        method: "get",
        params,
    });
}
// ModelAndView
export interface IModelAndView {
}
