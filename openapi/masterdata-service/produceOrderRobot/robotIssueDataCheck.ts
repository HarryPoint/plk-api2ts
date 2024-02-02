// 生产订单自动排产下发任务数据校验请求DTO
export interface I生产订单自动排产下发任务数据校验请求DTO {
    // 生产订单ids
    produceOrderIds: number[];
}
// JSONResult«生产订单自动排产下发任务数据校验返回DTO»
export interface IJSONResult生产订单自动排产下发任务数据校验返回DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产订单自动排产下发任务数据校验返回DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
