// 生产订单变更优先级DTO
export interface I生产订单变更优先级DTO {
    // 生产订单id
    produceOrderId: number;
    // 订单优先级
    priorityLevel: number;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
