import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/项目费用相关/getProjectFeeBudgetUsingPOST
export function fetchMethod(data: IProjectCostBudgetQueryObject) {
    return post({
      url: "/masterdata-service/projectFee/getProjectFeeBudget",
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
// JSONResult«项目费用预算响应对象»
export interface IJSONResultProjectCostBudgetResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectCostBudgetResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目费用预算响应对象
export interface IProjectCostBudgetResponseObject {
    // 执行时间
    executeTime: string;
    // 最新项目年度预算（元）
    lastProjectAnnualBudget: number;
    // 当年预算执行合计（元）
    totalBudgetExecute: number;
}
