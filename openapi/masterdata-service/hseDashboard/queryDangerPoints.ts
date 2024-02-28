import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/HSE大屏相关/queryDangerPointsUsingPOST
*/
export default function fetchMethod(options: { data: IDangerPointQueryRequest }, extraOptions?: any) {
    return http<IJSONResultListResponseToTheDangerPointQuery>(
        {
            url: "/masterdata-service/hseDashboard/queryDangerPoints",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 危险点查询请求 */
export interface IDangerPointQueryRequest {
    /** 查询日期的开始 */
    dateRangeBegin?: number;
    /** 查询日期的结束 */
    dateRangeEnd?: number;
}
/** JSONResult«List«危险点查询响应»» */
export interface IJSONResultListResponseToTheDangerPointQuery {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IDangerPointQueryResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 危险点查询响应 */
export interface IDangerPointQueryResponse {
    /** 危险点等级Key */
    dangerPointLevelKey?: string;
    /** 危险点等级名称 */
    dangerPointLevelName?: string;
    /** 危险点数量 */
    dangerPointQuantity?: number;
}
