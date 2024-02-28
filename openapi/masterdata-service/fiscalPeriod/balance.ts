import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16700/doc.html#/default/财务期间相关/balanceUsingPOST
*/
export default function fetchMethod(options: { data: IFinancialPeriodBalanceRequest }, extraOptions?: any) {
    return http<IJSONResultboolean>(
        {
            url: "/masterdata-service/fiscalPeriod/balance",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 财务期间结存请求 */
export interface IFinancialPeriodBalanceRequest {
    /** ID */
    id?: string;
}
/** JSONResult«boolean» */
export interface IJSONResultboolean {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: boolean;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
