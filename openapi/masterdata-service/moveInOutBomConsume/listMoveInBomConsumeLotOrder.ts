// 进料bom消耗批次订单查询DTO
export interface I进料bom消耗批次订单查询DTO {
    // 生产任务id
    produceTaskId: number;
    // 批次号、物料编号
    code: string;
}
// JSONResult«List«进料bom消耗批次响应DTO»»
export interface IJSONResultList进料bom消耗批次响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 进料bom消耗批次响应DTO_1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
