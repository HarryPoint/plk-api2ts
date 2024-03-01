import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/质量审核统计表/queryImprovementItemsUsingPOST
*/
export default function fetchMethod(options: { data: IBasicQualityAuditQueryRequest }, extraOptions?: any) {
    return http<IJSONResultImprovedQueryResponseStatistics>(
        {
            url: "/masterdata-service/qualityAuditStatisticsReport/queryImprovementItems",
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
/** JSONResult«改进项统计查询响应» */
export interface IJSONResultImprovedQueryResponseStatistics {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IImprovedItemStatisticsQueryResponse;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 改进项统计查询响应 */
export interface IImprovedItemStatisticsQueryResponse {
    /** 部门指标 - XX部门该井数量、XX部门未整改数量、XX部门整改率标题 */
    departmentIndicates?: IDepartmentalLevelIndicators[];
    /** 改进项数量 */
    improvementItemsQuantity?: number;
    /** 整改率 */
    rectificationRate?: number;
    /** 未整改数量 */
    unRectifiedQuantity?: number;
}
/** 部门级别的指标 */
export interface IDepartmentalLevelIndicators {
    /** 部门ID */
    departmentId?: string;
    /** 部门名称 */
    departmentName?: string;
    /** 改进项数量 */
    improvementItemsQuantity?: number;
    /** 整改率 */
    rectificationRate?: number;
    /** 未整改数量 */
    unRectifiedQuantity?: number;
}
