// 生产任务设置进料设备请求DTO
export interface I生产任务设置进料设备请求DTO {
    // 生产任务id
    produceTaskId: number;
    // 设备ids
    deviceIds: number[];
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}