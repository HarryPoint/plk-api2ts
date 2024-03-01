import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/财务期间相关/balanceAntiUsingPOST
*/
export default function fetchMethod(options: { data: ICounterbalanceRequestForFinancialPeriod }, extraOptions?: any) {
    return http<IJSONResultBool>(
        {
            url: "/masterdata-service/fiscalPeriod/balanceAnti",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 财务期间反结存请求 */
export interface ICounterbalanceRequestForFinancialPeriod {
    /** ID */
    id?: string;
}
/** JSONResult«boolean» */
export interface IJSONResultBool {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: boolean;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
