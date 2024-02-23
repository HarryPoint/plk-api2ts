import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/宝晶报表(销售发货分析)相关/exportExcelUsingGET_6
export default function fetchMethod(params: { ticket: string }) {
    return http<IModelAndView>({
        url: "/app-enterprise-web/api/app/enterprise/baoJingReportSalesDeliver/exportExcel",
        method: "get",
        params,
    });
}
// ModelAndView
export interface IModelAndView {
}