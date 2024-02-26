import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/订单进度统计报表相关/exportExcelUsingGET_15
*/
export default function fetchMethod(params: { ticket: string }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/salesOrderReport/exportExcel",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** ModelAndView */
export interface IModelAndView {
}
