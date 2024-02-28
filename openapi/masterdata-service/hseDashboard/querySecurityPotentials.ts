import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/HSE大屏相关/querySecurityPotentialsUsingPOST
*/
export default function fetchMethod(options: { data: ISecurityRiskQueryRequest }, extraOptions?: any) {
    return http<IJSONResultListResponseToASecurityHazardQuery>(
        {
            url: "/masterdata-service/hseDashboard/querySecurityPotentials",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 安全隐患查询请求 */
export interface ISecurityRiskQueryRequest {
    /** 查询日期的开始 */
    dateRangeBegin?: number;
    /** 查询日期的结束 */
    dateRangeEnd?: number;
}
/** JSONResult«List«安全隐患查询响应»» */
export interface IJSONResultListResponseToASecurityHazardQuery {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISecurityRiskQueryResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 安全隐患查询响应 */
export interface ISecurityRiskQueryResponse {
    /** 检查类型-key */
    checkTypeKey?: string;
    /** 检查类型-名称 */
    checkTypeName?: string;
    /** 已完成数量 */
    completedQuantity?: number;
    /** 进行中数量 */
    progressQuantity?: number;
    /** 超期数量 */
    overdueQuantity?: number;
}
