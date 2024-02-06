// 项目概况查询dto
export interface IProjectOverviewQueryDto {
    // 项目id
    projectId: number;
    // 开始日期
    beginTime: string;
    // 结束日期
    endTime: string;
    // 查询条数
    limit: number;
}
// JSONResult«项目费用统计响应对象»_1
export interface IJSONResultProjectCostStatisticsResponseObject1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProjectCostStatisticsResponseObject1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目费用统计响应对象_1
export interface IProjectCostStatisticsResponseObject1 {
    // 名称
    name: string;
    // 预算执行率
    budgetExecuteRate: number;
    // 资金计划执行率
    fundPlanExecuteRate: number;
}
