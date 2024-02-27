import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/WIP报表相关/exportExcelUsingGET_16
*/
export default function fetchMethod(options: { params: { ticket?: string } }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/wipReport/exportExcel",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** ModelAndView */
export interface IModelAndView {
}
