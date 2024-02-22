import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目费用相关/getProjectFeeGrandTotalUsingPOST
export function fetchMethod(data: IProjectCostBudgetQueryObject) {
    return post({
      url: "/masterdata-service/projectFee/getProjectFeeGrandTotal",
      data,
    });
}
// 项目费用预算查询对象
export interface IProjectCostBudgetQueryObject {
    // 项目id
    projectId: number;
    // 执行时间 yyyy-MM-dd HH:mm:ss
    executeTime: string;
}
// JSONResult«项目费用累计响应对象»
export interface IJSONResultProjectCostAccumulationResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectCostCumulativeResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目费用累计响应对象
export interface IProjectCostCumulativeResponseObject {
    // 累计预算
    totalBudget: number;
    // 累计预算执行
    totalBudgetExecute: number;
    // 累计预算执行率
    totalBudgetExecuteRate: number;
    // 累计资金计划（元）
    totalFundPlan: number;
    // 累计资金计划执行（元）
    totalFundPlanExecute: number;
    // 累计资金计划执行率
    totalFundPlanExecuteRate: number;
    // 月度资金计划
    monthFundPlan: number;
}
