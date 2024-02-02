// JSONResult«List«生产订单»»
export interface IJSONResultList生产订单 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产订单[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
