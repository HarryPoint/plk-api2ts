import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/工时工费相关/exportMonthExcelUsingGET
export default function fetchMethod(params: { ticket: string }) {
    return http<IModelAndView>({
        url: "/app-enterprise-web/api/app/enterprise/produceTimeFeeReport/exportMonthExcel",
        method: "get",
        params,
    });
}
// ModelAndView
export interface IModelAndView {
}
