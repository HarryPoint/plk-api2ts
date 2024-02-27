import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目大屏相关/queryProjectFeeCountUsingPOST
*/
export default function fetchMethod(options: { data: IProjectKanbanQueryDto }, extraOptions?: any) {
    return http<IJSONResultListProjectCostStatisticsResponseObject>(
        {
            url: "/masterdata-service/projectDashboard/queryProjectFeeCount",
            method: "post",
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
    /** 项目大类 */
    projectCategory?: string;
    /** undefined */
    projectTypeIds?: string[];
    /** undefined */
    excludeProjectIds?: string[];
}
/** JSONResult«List«项目费用统计响应对象»» */
export interface IJSONResultListProjectCostStatisticsResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectCostStatisticsResponseObject1[];
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
