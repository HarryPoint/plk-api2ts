// 生产计划工艺路径步骤排产 VO
export interface I生产计划工艺路径步骤排产VO {
    // 生产订单ids
    produceOrderIds: number[];
}
// JSONResult«List«生产计划工艺路径步骤排产  VO»»
export interface IJSONResultList生产计划工艺路径步骤排产VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产计划工艺路径步骤排产  VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
