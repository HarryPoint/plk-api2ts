import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/产出报表(按工序统计)相关/exportExcelUsingGET_14
export default function fetchMethod(params: { ticket: string }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceProcessReport/exportExcel",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// ModelAndView
export interface IModelAndView {
}
