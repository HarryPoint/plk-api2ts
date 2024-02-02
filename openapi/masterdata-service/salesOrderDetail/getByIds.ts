// JSONResult«List«销售订单详情返回VO»»
export interface IJSONResultList销售订单详情返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 销售订单详情返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
