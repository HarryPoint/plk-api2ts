// 生产处理查询VO - 针对生产订单
export interface I生产处理查询VO针对生产订单 {
    // 生产订单id
    produceOrderId: number;
    // 生产任务id
    produceTaskId: number;
    // 异常分类
    type: string;
}
// JSONResult«List«生产处理基础信息响应DTO»»
export interface IJSONResultList生产处理基础信息响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产处理基础信息响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
