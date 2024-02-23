import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/产出报表(产出数据相关)相关/exportExcelUsingGET_12
export default function fetchMethod(params: { ticket: string }) {
    return http<IModelAndView>({
        url: "/app-enterprise-web/api/app/enterprise/produceDataReport/exportExcel",
        method: "get",
        params,
    });
}
// ModelAndView
export interface IModelAndView {
}
