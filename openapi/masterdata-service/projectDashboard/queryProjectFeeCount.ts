// 项目看板查询dto
export interface IProjectKanbanQueryDto {
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
// JSONResult«List«项目费用统计响应对象»»
export interface IJSONResultList项目费用统计响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目费用统计响应对象_1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目费用统计响应对象_1
export interface I项目费用统计响应对象_1 {
    // 名称
    name: string;
    // 预算执行率
    budgetExecuteRate: number;
    // 资金计划执行率
    fundPlanExecuteRate: number;
}
