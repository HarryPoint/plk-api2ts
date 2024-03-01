import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/QMS大屏相关/queryInspectionTaskModelStatisticsUsingGET
*/
export default function fetchMethod(options: { params: { DateBegin?: string; DateEnd?: string } }, extraOptions?: any) {
    return http<IJSONResultListReturnsTheModelStatisticsOfTheLargeScreenTestPlan>(
        {
            url: "/masterdata-service/qmsDashboard/queryInspectionTaskModelStatistics",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«大屏检验计划执行型号统计返回»» */
export interface IJSONResultListReturnsTheModelStatisticsOfTheLargeScreenTestPlan {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ILargeScreenCheckPlanExecutionModelStatisticsReturn[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 大屏检验计划执行型号统计返回 */
export interface ILargeScreenCheckPlanExecutionModelStatisticsReturn {
    /** 已完成任务量 */
    completeQuantity?: number;
    /** 进行中任务量 */
    handlingQuantity?: number;
    /** 型号 */
    model?: string;
    /** 超期任务量 */
    overdueQuantity?: number;
}
