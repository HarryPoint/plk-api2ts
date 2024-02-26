import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/宝晶报表(销售发货分析)相关/exportExcelUsingGET_6
*/
export default function fetchMethod(params: { ticket: string }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/baoJingReportSalesDeliver/exportExcel",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** ModelAndView */
export interface IModelAndView {
}
