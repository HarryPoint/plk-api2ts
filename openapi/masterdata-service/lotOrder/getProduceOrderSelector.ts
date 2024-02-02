// JSONResult«List«生产订单返回VO»»
export interface IJSONResultList生产订单返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产订单返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产订单返回VO
export interface I生产订单返回VO {
    // id
    id: number;
    // 生产订单号
    produceOrderCode: string;
}
