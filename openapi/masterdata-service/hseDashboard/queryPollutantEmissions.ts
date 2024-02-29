import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.139.107:16700/doc.html#/default/HSE大屏相关/queryPollutantEmissionsUsingPOST
*/
export default function fetchMethod(options: { data: IPollutantQueryRequest }, extraOptions?: any) {
    return http<IJSONResultListPollutantQueryResponse>(
        {
            url: "/masterdata-service/hseDashboard/queryPollutantEmissions",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 污染物查询请求 */
export interface IPollutantQueryRequest {
    /** 查询日期的开始 */
    dateRangeBegin?: number;
    /** 查询日期的结束 */
    dateRangeEnd?: number;
}
/** JSONResult«List«污染物查询响应»» */
export interface IJSONResultListPollutantQueryResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPollutantQueryResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 污染物查询响应 */
export interface IPollutantQueryResponse {
    /** 污染物排放类别 */
    pollutantEmissionCategory?: string;
    /** 数量 */
    quantity?: number;
}
