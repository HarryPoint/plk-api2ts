import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.139.107:16700/doc.html#/default/项目概况相关/queryProjectFeeCountUsingPOST_1
*/
export default function fetchMethod(options: { data: IProjectOverviewQueryDto }, extraOptions?: any) {
    return http<IJSONResultProjectCostStatisticsResponseObject1>(
        {
            url: "/masterdata-service/projectOverview/queryProjectFeeCount",
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
/** JSONResult«项目费用统计响应对象»_1 */
export interface IJSONResultProjectCostStatisticsResponseObject1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectCostStatisticsResponseObject1;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目费用统计响应对象_1 */
export interface IProjectCostStatisticsResponseObject1 {
    /** 名称 */
    name?: string;
    /** 预算执行率 */
    budgetExecuteRate?: number;
    /** 资金计划执行率 */
    fundPlanExecuteRate?: number;
}
