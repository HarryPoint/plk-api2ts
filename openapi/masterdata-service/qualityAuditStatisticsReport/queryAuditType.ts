import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.139.107:16700/doc.html#/default/质量审核统计表/queryAuditTypeUsingPOST
*/
export default function fetchMethod(options: { data: IBasicQualityAuditQueryRequest1 }, extraOptions?: any) {
    return http<IJSONResultResponseToTheQualityAuditTypeQuery>(
        {
            url: "/masterdata-service/qualityAuditStatisticsReport/queryAuditType",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 基础质量审核查询请求_1 */
export interface IBasicQualityAuditQueryRequest1 {
    /** 日期范围-起始 */
    dateRangeBegin?: number;
    /** 日期范围-结束 */
    dateRangeEnd?: number;
}
/** JSONResult«质量审核类型查询响应» */
export interface IJSONResultResponseToTheQualityAuditTypeQuery {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IQualityAuditTypeQueryResponse;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 质量审核类型查询响应 */
export interface IQualityAuditTypeQueryResponse {
    /** 标题列表-仅包含XX不符合项数量,XX 不符合占比 */
    titleList?: IAuditTypeHeading[];
    /** 内审清单 */
    internalAudit?: IQualityAuditTypeValueResponse;
    /** 外审清单 */
    externalAudit?: IQualityAuditTypeValueResponse;
    /** 专审清单 */
    specialAudit?: IQualityAuditTypeValueResponse;
}
/** 审核类型标题 */
export interface IAuditTypeHeading {
    /** 标题的Key */
    key?: string;
    /** 标题的名称 */
    name?: string;
}
/** 质量审核类型的值响应 */
export interface IQualityAuditTypeValueResponse {
    /** 不符合项数量 */
    nonConformanceQuantity?: number;
    /** 不符合项 - 动态指标。 key - 为 titleList[].key。指标为表格的值 */
    dynamicIndicators?: Record<string, number>;
    /** 不符合项 - 未整改数量 */
    nonConformanceUnRectifiedQuantity?: string;
    /** 不符合项 - 整改率 */
    nonConformanceRectificationRate?: number;
    /** 建议项数量 */
    suggestedItemsQuantity?: number;
    /** 建议项 - 未整改数量 */
    suggestedItemsUnRectifiedQuantity?: number;
    /** 建议项 - 整改率 */
    suggestedItemsRectificationRate?: number;
}
