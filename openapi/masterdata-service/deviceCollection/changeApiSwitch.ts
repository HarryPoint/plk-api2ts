// 设备数采通讯状态DTO
export interface IDeviceDataAcquisitionCommunicationStatusDTO {
    // id
    id: number;
    // 通讯开关状态
    apiSwitchStatus: string;
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
