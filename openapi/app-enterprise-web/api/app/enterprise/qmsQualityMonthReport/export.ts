import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16400/doc.html#/default/质量月报报表相关/exportUsingGET
*/
export default function fetchMethod(options: { params: { ticket?: string } }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/qmsQualityMonthReport/export",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** ModelAndView */
export interface IModelAndView {
}
