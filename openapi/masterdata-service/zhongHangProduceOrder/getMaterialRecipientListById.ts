// JSONResult«List«生产订单物料领用响应dto»»
export interface IJSONResultList生产订单物料领用响应dto {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产订单物料领用响应dto[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
