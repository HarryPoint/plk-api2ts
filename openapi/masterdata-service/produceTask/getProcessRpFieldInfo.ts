// 工序关联字段查询请求对象
export interface I工序关联字段查询请求对象 {
    // 生产订单id
    produceOrderId: number;
    // 工序ID
    processId: number;
    // 销售订单id
    salesOrderId: number;
}
// JSONResult«List«工序对应字段详情VO»»
export interface IJSONResultList工序对应字段详情VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 工序对应字段详情VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
