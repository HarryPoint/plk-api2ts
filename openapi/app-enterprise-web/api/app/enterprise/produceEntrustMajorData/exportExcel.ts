import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/委外报表相关/exportExcelUsingGET_10
export default function fetchMethod(params: { ticket: string }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceEntrustMajorData/exportExcel",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// ModelAndView
export interface IModelAndView {
}
