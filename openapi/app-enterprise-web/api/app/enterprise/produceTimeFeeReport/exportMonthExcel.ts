import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/工时工费相关/exportMonthExcelUsingGET
*/
export default function fetchMethod(options: { params: { ticket?: string } }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceTimeFeeReport/exportMonthExcel",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** ModelAndView */
export interface IModelAndView {
}
