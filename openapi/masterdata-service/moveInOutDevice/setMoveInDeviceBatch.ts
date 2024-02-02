// 生产任务批量设置进料设备请求DTO
export interface IProductionTaskBatchSetTheFeedDeviceRequestDTO {
    // 工序id
    processId: number;
    // 生产任务详情
    produceTaskDetails: 生产任务批量设置进料设备任务详情请求DTO[];
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
