import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/财务期间相关/getFiscalPeriodStartMonthUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultSetsResponseDuringTheStartMonth>(
        {
            url: "/masterdata-service/fiscalPeriod/getFiscalPeriodStartMonth",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«设置期间开始月份Response» */
export interface IJSONResultSetsResponseDuringTheStartMonth {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ISetResponseDuringStartMonth;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 设置期间开始月份Response */
export interface ISetResponseDuringStartMonth {
    /** ID */
    startMonth?: number;
}
