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
    data: 生产任务分组批次订单响应DTO(针对移动端)[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
