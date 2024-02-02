// 生产计划订单步骤日产量 VO
export interface I生产计划订单步骤日产量VO {
    // 生产订单ids
    produceOrderIds: number[];
}
// JSONResult«List«生产计划订单步骤日产量  VO»»
export interface IJSONResultList生产计划订单步骤日产量VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产计划订单步骤日产量  VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
