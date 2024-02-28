import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/HSE大屏相关/queryRiskPointPollutionSourceListUsingPOST
*/
export default function fetchMethod(options: { data: IRiskPointPollutionSourceQueryRequest }, extraOptions?: any) {
    return http<IJSONResultListIndicatesTheResponseToTheSourceQueryAtTheRiskPoint>(
        {
            url: "/masterdata-service/hseDashboard/queryRiskPointPollutionSourceList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 风险点污染源查询请求 */
export interface IRiskPointPollutionSourceQueryRequest {
    /** 查询日期的开始 */
    dateRangeBegin?: number;
    /** 查询日期的结束 */
    dateRangeEnd?: number;
}
/** JSONResult«List«风险点污染源查询响应»» */
export interface IJSONResultListIndicatesTheResponseToTheSourceQueryAtTheRiskPoint {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IRiskPointPollutionSourceQueryResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 风险点污染源查询响应 */
export interface IRiskPointPollutionSourceQueryResponse {
    /** ID */
    id?: string;
    /** 年份 */
    year?: string;
    /** 风险点数量 */
    riskPointQuantity?: number;
    /** 污染源数量 */
    pollutionSourceQuantity?: number;
}
