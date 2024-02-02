// 生产订单下发扩展信息查询VO
export interface I生产订单下发扩展信息查询VO {
    // 生产订单ids
    produceOrderIds: number[];
}
// JSONResult«List«生产订单下发扩展信息VO»»
export interface IJSONResultList生产订单下发扩展信息VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产订单下发扩展信息VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
