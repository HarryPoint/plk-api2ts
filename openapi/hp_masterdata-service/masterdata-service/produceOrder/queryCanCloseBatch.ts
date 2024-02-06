// ProduceOrderBatchCloseRequestDTO
export interface IProduceOrderBatchCloseRequestDTO {
    // 生产订单ID列表
    produceOrderIdList: number[];
}
// JSONResult«List«long»»
export interface IJSONResultListlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
