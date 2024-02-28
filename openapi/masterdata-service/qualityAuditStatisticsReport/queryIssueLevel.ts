import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/质量审核统计表/queryIssueLevelUsingPOST
*/
export default function fetchMethod(options: { data: IBasicQualityAuditQueryRequest }, extraOptions?: any) {
    return http<IJSONResultListProblemLevelQueryResponse>(
        {
            url: "/masterdata-service/qualityAuditStatisticsReport/queryIssueLevel",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 基础质量审核查询请求 */
export interface IBasicQualityAuditQueryRequest {
    /** 日期范围-起始 */
    dateRangeBegin?: number;
    /** 日期范围-结束 */
    dateRangeEnd?: number;
}
/** JSONResult«List«问题等级查询响应»» */
export interface IJSONResultListProblemLevelQueryResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IQuestionLevelQueryResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 问题等级查询响应 */
export interface IQuestionLevelQueryResponse {
    /** 问题等级 */
    issueLevel?: string;
    /** 问题等级名称 */
    issueLevelName?: string;
    /** 不符合项数量 */
    nonConformanceQuantity?: number;
    /** 未整改数量 */
    unRectifiedQuantity?: number;
    /** 整改率 */
    rectificationRate?: number;
    /** 内部审核不符合项数量 */
    internalAuditNonConformanceQuantity?: number;
    /** 外部审核不符合项数量 */
    externalAuditNonConformanceQuantity?: number;
    /** 专项审核不符合项数量 */
    specialAuditNonConformanceQuantity?: number;
}
