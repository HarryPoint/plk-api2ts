// 生产任务从消息来的搜索VO
export interface I生产任务从消息来的搜索VO {
    // 生产订单id
    produceOrderId: number;
    // 生产工艺路径步骤id
    produceTechnologyRoutingStepId: number;
    // 任务类型
    type: string;
}
// JSONResult«List«生产任务响应DTO(针对移动端)»»
export interface IJSONResultList生产任务响应DTO针对移动端 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产任务响应DTO(针对移动端)[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
