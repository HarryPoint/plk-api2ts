// JSONResult«生产订单关闭信息返回VO»
export interface IJSONResult生产订单关闭信息返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产订单关闭信息返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产订单关闭信息返回VO
export interface I生产订单关闭信息返回VO {
    // id
    id: number;
    // 生产订单号
    produceOrderCode: string;
    // 总生产数量(计划生产数量)
    totalCount: number;
    // 当前生产数量(合格产出数量)
    currentCount: number;
    // 当前累积报废数量
    currentScrapCount: number;
    // 任务处理数量
    taskCompleteQuantity: number;
    // 是否存在未处理的审批事件
    hasWaitProduceHandle: string;
    // 是否存在未处理完的委外订单
    hasSurplusProduceEntrust: string;
    // 关闭后的订单状态
    orderStatus: string;
    // 关闭后的订单状态描述
    orderStatusDesc: string;
}
