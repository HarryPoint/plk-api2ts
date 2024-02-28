import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/财务期间相关/addFiscalPeriodBasedOnYearUsingPOST
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/fiscalPeriod/addFiscalPeriodBasedOnYear",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
