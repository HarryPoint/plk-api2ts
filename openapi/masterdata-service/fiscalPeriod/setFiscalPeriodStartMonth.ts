import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/财务期间相关/setFiscalPeriodStartMonthUsingPOST
*/
export default function fetchMethod(options: { data: ISetTheStartMonthRequestDuringThePeriod }, extraOptions?: any) {
    return http<IJSONResultLong>(
        {
            url: "/masterdata-service/fiscalPeriod/setFiscalPeriodStartMonth",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 设置期间开始月份Request */
export interface ISetTheStartMonthRequestDuringThePeriod {
    /** ID */
    startMonth?: number;
}
/** JSONResult«long» */
export interface IJSONResultLong {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
