// 项目费用预算查询对象
export interface I项目费用预算查询对象 {
    // 项目id
    projectId: number;
    // 执行时间 yyyy-MM-dd HH:mm:ss
    executeTime: string;
}
// JSONResult«项目费用累计响应对象»
export interface IJSONResult项目费用累计响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目费用累计响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目费用累计响应对象
export interface I项目费用累计响应对象 {
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
