import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/产出报表(按物料统计)相关/exportExcelUsingGET_13
*/
export default function fetchMethod(params: { ticket: string }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceMaterialReport/exportExcel",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** ModelAndView */
export interface IModelAndView {
}
