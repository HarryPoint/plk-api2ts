import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/QMS大屏相关/queryInspectionTaskModelStatisticsUsingGET
export default function fetchMethod(params: { dateBegin: string; dateEnd: string }) {
    return http<IJSONResultListReturnsTheModelStatisticsOfTheLargeScreenTestPlan>({
        url: "/masterdata-service/qmsDashboard/queryInspectionTaskModelStatistics",
        method: "get",
        params,
    });
}
// JSONResult«List«大屏检验计划执行型号统计返回»»
export interface IJSONResultListReturnsTheModelStatisticsOfTheLargeScreenTestPlan {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ILargeScreenCheckPlanExecutionModelStatisticsReturn[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 大屏检验计划执行型号统计返回
export interface ILargeScreenCheckPlanExecutionModelStatisticsReturn {
    // 型号
    model: string;
    // 进行中任务量
    handlingQuantity: number;
    // 已完成任务量
    completeQuantity: number;
    // 超期任务量
    overdueQuantity: number;
}
