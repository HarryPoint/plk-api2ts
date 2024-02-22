// http://47.108.139.107:16700/doc.html#/default/进出料设备相关/setMoveInDeviceUsingPOST
// 生产任务设置进料设备请求DTO
export interface ITheProductionTaskSetsTheFeedDeviceToRequestTheDTO {
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
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
