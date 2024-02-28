import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.139.107:16700/doc.html#/default/项目概况相关/queryProjectRiskCountUsingPOST_1
*/
export default function fetchMethod(options: { data: IProjectOverviewQueryDto }, extraOptions?: any) {
    return http<IJSONResultProjectRiskStatisticsResponseObject>(
        {
            url: "/masterdata-service/projectOverview/queryProjectRiskCount",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目概况查询dto */
export interface IProjectOverviewQueryDto {
    /** 项目id */
    projectId: string;
    /** 开始日期 */
    beginTime?: number;
    /** 结束日期 */
    endTime?: number;
    /** 查询条数 */
    limit?: number;
}
/** JSONResult«项目风险统计响应对象» */
export interface IJSONResultProjectRiskStatisticsResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectRiskStatisticalResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目风险统计响应对象 */
export interface IProjectRiskStatisticalResponseObject {
    /** 风险总数量 */
    totalQuantity?: number;
    /** 已完成数量 */
    completeQuantity?: number;
    /** 超期数量 */
    overdueQuantity?: number;
    /** 低风险数量 */
    lowQuantity?: number;
    /** 中风险数量 */
    midQuantity?: number;
    /** 高风险数量 */
    highQuantity?: number;
    /** 未完成数量 */
    unCompleteQuantity?: number;
    /** 低风险完成数量 */
    lowCompleteQuantity?: number;
    /** 中风险完成数量 */
    midCompleteQuantity?: number;
    /** 高风险完成数量 */
    highCompleteQuantity?: number;
    /** 低风险未完成数量 */
    lowUnCompleteQuantity?: number;
    /** 中风险未完成数量 */
    midUnCompleteQuantity?: number;
    /** 高风险未完成数量 */
    highUnCompleteQuantity?: number;
}
