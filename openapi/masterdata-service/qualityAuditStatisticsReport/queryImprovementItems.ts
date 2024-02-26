import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/质量审核统计表/queryImprovementItemsUsingPOST
*/
export default function fetchMethod(data: IBasicQualityAuditQueryRequest, extraOptions?: any) {
    return http<IJSONResultImprovedQueryResponseStatistics>(
        {
            url: "/masterdata-service/qualityAuditStatisticsReport/queryImprovementItems",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 基础质量审核查询请求 */
export interface IBasicQualityAuditQueryRequest {
    /** 日期范围-起始 */
    dateRangeBegin?: string;
    /** 日期范围-结束 */
    dateRangeEnd?: string;
}
/** JSONResult«改进项统计查询响应» */
export interface IJSONResultImprovedQueryResponseStatistics {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IImprovedItemStatisticsQueryResponse;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 改进项统计查询响应 */
export interface IImprovedItemStatisticsQueryResponse {
    /** 改进项数量 */
    improvementItemsQuantity?: number;
    /** 未整改数量 */
    unRectifiedQuantity?: number;
    /** 整改率 */
    rectificationRate?: number;
    /** 部门指标 - XX部门该井数量、XX部门未整改数量、XX部门整改率标题 */
    departmentIndicates?: IDepartmentalLevelIndicators[];
}
/** 部门级别的指标 */
export interface IDepartmentalLevelIndicators {
    /** 部门ID */
    departmentId?: number;
    /** 部门名称 */
    departmentName?: string;
    /** 改进项数量 */
    improvementItemsQuantity?: number;
    /** 未整改数量 */
    unRectifiedQuantity?: number;
    /** 整改率 */
    rectificationRate?: number;
}
