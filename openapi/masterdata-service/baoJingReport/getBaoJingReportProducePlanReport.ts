// 宝晶生产任务甘特图查询对象
export interface IBaojingProductionTaskGanttChartQueryObject {
    // 物料id
    materialIds: number[];
    // 部门id
    departmentIds: number[];
    // 计划开始日期
    planStartDate: string;
    // 计划结束日期
    planEndDate: string;
    // 交货开始日期
    startDeliveryDate: string;
    // 交货结束日期
    endDeliveryDate: string;
}
// JSONResult«List«宝晶生产计划甘特图响应对象»»
export interface IJSONResultListTreasureProductionPlanGanttChartResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 宝晶生产计划甘特图响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
