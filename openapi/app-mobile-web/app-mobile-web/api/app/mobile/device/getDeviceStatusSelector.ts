// JSONResult«List«设备状态VO»»
export interface IJSONResultListDeviceStatusVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IDeviceStatusVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备状态VO
export interface IDeviceStatusVO {
    // 设备状态
    status: string;
    // 设备状态描述
    statusDesc: string;
}
