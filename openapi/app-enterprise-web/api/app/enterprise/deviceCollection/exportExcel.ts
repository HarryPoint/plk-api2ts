import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/设备数采数据概览相关/exportExcelUsingGET_8
*/
export default function fetchMethod(options: { params: { ticket?: string } }, extraOptions?: any) {
    return http<IModelAndView>(
        {
            url: "/app-enterprise-web/api/app/enterprise/deviceCollection/exportExcel",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** ModelAndView */
export interface IModelAndView {
}
