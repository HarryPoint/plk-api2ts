import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/质量审核统计表/queryClauseNumberUsingPOST
*/
export default function fetchMethod(data: IBasicQualityAuditQueryRequest, extraOptions?: any) {
    return http<IJSONResultIndicatesTheStatisticalItemNumberOfTheIncompatibilityItem>(
        {
            url: "/masterdata-service/qualityAuditStatisticsReport/queryClauseNumber",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 基础质量审核查询请求 */
export interface IBasicQualityAuditQueryRequest {
    /** 日期范围-起始 */
    dateRangeBegin: string;
    /** 日期范围-结束 */
    dateRangeEnd: string;
}
/** JSONResult«不符合项统计-条款号» */
export interface IJSONResultIndicatesTheStatisticalItemNumberOfTheIncompatibilityItem {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: INonConformanceStatisticsClauseNumber;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 不符合项统计-条款号 */
export interface INonConformanceStatisticsClauseNumber {
    /** 各部门不符合项分布情况的标题 */
    titleList: IAuditTypeHeading[];
    /** 条款项列表 */
    itemList: IQualityAuditClauseNumberQueryItemResponseDTO[];
}
/** 审核类型标题 */
export interface IAuditTypeHeading {
    /** 标题的Key */
    key: string;
    /** 标题的名称 */
    name: string;
}
/** QualityAuditClauseNumberQueryItemResponseDTO */
export interface IQualityAuditClauseNumberQueryItemResponseDTO {
    /** 条款号ID */
    clauseNumberId: number;
    /** 条款号 */
    clauseNumber: string;
    /** 不符合项数量 */
    nonConformanceQuantity: number;
    /** 未整改数量 */
    unRectifiedQuantity: number;
    /** 整改率 */
    rectificationRate: number;
    /** 各部门不符合项分布情况 */
    dynamicIndicates: Record<string, number>;
}
