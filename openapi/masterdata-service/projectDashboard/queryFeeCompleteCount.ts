import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目大屏相关/queryFeeCompleteCountUsingPOST
*/
export default function fetchMethod(options: { data: IProjectKanbanQueryDto }, extraOptions?: any) {
    return http<IJSONResultProjectCostStatisticsResponseObject>(
        {
            url: "/masterdata-service/projectDashboard/queryFeeCompleteCount",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目看板查询dto */
export interface IProjectKanbanQueryDto {
    /** 开始日期 */
    beginTime?: number;
    /** 结束日期 */
    endTime?: number;
    /** undefined */
    excludeProjectIds?: string[];
    /** 项目大类 */
    projectCategory?: string;
    /** undefined */
    projectTypeIds?: string[];
}
/** JSONResult«项目费用统计响应对象» */
export interface IJSONResultProjectCostStatisticsResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectCostStatisticsResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目费用统计响应对象 */
export interface IProjectCostStatisticsResponseObject {
    /** 预算执行（元） */
    budgetExecute?: number;
    /** 预算执行率 */
    budgetExecuteRate?: number;
    /** 资金计划执行率 */
    fundPlanExecuteRate?: number;
    /** 资金计划（元） */
    monthFundPlan?: number;
    /** 资金计划执行（元） */
    monthFundPlanExecute?: number;
    /** 项目预算（元） */
    projectAnnualBudget?: number;
}
