// 批次订单流水搜索VO
export interface I批次订单流水搜索VO {
    // 生产订单id
    produceOrderId: number;
    // 批次订单id
    lotOrderId: number;
    // 流水类型
    flowType: string;
}
// JSONResult«List«批次订单流水明细信息响应DTO»»
export interface IJSONResultList批次订单流水明细信息响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 批次订单流水明细信息响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
