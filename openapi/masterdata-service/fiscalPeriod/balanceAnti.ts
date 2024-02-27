import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/财务期间相关/balanceAntiUsingPOST
*/
export default function fetchMethod(options: { data: ICounterbalanceRequestForFinancialPeriod }, extraOptions?: any) {
    return http<IJSONResultboolean>(
        {
            url: "/masterdata-service/fiscalPeriod/balanceAnti",
            method: "post",
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
