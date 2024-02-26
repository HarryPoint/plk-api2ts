import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/库存统计（成品）日报表/exportExcelUsingGET_4
*/
export default function fetchMethod(params: { ticket: string }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/baoJingReportProduceStorage/exportExcel",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** ModelAndView */
export interface IModelAndView {
}
