import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/HSE大屏相关/querySafetyProductionDaysUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/hseDashboard/querySafetyProducetionDays",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
