// 设备数采方案应用设备关联信息编辑DTO
export interface IDeviceDataAcquisitionSolutionEditDTOByApplyingDeviceAssociationInformation {
    // 方案id
    id: number;
    // 设备id集
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
