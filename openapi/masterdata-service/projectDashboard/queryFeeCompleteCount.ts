// 项目看板查询dto
export interface I项目看板查询dto {
    // 开始日期
    beginTime: string;
    // 结束日期
    endTime: string;
    // 项目大类
    projectCategory: string;
    // undefined
    projectTypeIds: number[];
    // undefined
    excludeProjectIds: number[];
}
// JSONResult«项目费用统计响应对象»
export interface IJSONResult项目费用统计响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目费用统计响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目费用统计响应对象
export interface I项目费用统计响应对象 {
    // 项目预算（元）
    projectAnnualBudget: number;
    // 预算执行（元）
    budgetExecute: number;
    // 预算执行率
    budgetExecuteRate: number;
    // 资金计划（元）
    monthFundPlan: number;
    // 资金计划执行（元）
    monthFundPlanExecute: number;
    // 资金计划执行率
    fundPlanExecuteRate: number;
}
