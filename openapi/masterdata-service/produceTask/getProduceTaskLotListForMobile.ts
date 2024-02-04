// 生产任务批次信息查询DTO(针对移动端)
export interface I生产任务批次信息查询DTO针对移动端 {
    // 任务ids
    taskIds: number[];
    // 进出料类型
    produceTaskOptType: string;
}
// JSONResult«List«生产任务分组批次订单响应DTO(针对移动端)»»
export interface IJSONResultList生产任务分组批次订单响应DTO针对移动端 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产任务分组批次订单响应DTO针对移动端[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产任务分组批次订单响应DTO(针对移动端)
export interface I生产任务分组批次订单响应DTO针对移动端 {
    // 任务id
    taskId: number;
    // 批次
    lotOrders: I生产任务分组批次明细响应DTO针对移动端[];
}
// 生产任务分组批次明细响应DTO(针对移动端)
export interface I生产任务分组批次明细响应DTO针对移动端 {
    // 批次id
    lotId: number;
    // 批次号
    lotNo: string;
    // 批次总数量
    totalCount: number;
    // 批次可进料数量
    canMoveInQuantity: number;
    // 批次可出料数量
    canMoveOutQuantity: number;
}
