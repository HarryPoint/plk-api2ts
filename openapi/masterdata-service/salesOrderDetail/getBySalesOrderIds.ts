// JSONResult«List«销售订单明细»»
export interface IJSONResultList销售订单明细 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 销售订单明细[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
