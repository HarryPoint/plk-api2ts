// JSONResult«Map«long,List«生产计划工艺路径步骤排产  VO»»»
export interface IJSONResultMaplongListProductionPlanProcessPathStepScheduleProductionVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: any;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产计划工艺路径步骤排产  VO
export interface IProductionPlanningProcessPathStepSchedulingProductionVO {
    // 生产订单id
    produceOrderId: number;
    // 工艺路径id
    produceTechnologyRoutingId: number;
    // 工艺路径步骤
    produceTechnologyRoutingStep: number;
    // 工艺路径步骤id
    produceTechnologyRoutingStepId: number;
    // 工序id
    processId: number;
    // 计划开始日期
    beginTime: string;
    // 计划结束日期
    endTime: string;
    // 工序编号
    processCode: string;
    // 工序名称
    processName: string;
    // 生产数量 -- 产能
    capacityProduceQuantity: number;
    // 生产时间 -- 产能
    capacityProduceTime: number;
    // 时间单位 -- 产能
    capacityTimeType: string;
    // 时间单位 -- 准备耗时
    readyTimeUnit: string;
    // 准备耗时 -- 准备耗时
    readyTime: number;
}
