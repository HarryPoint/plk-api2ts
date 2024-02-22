// http://47.108.139.107:16700/doc.html#/default/设备人员能力相关/existsDeviceMaintainTaskUsingPOST
// 设备人员能力是否存在任务请求DTO
export interface IDevicePersonnelCapabilityWhetherThereIsATaskRequestDTO {
    // 员工能力ids
    deviceEmployeeCapacityIds: number[];
}
// JSONResult«List«设备人员能力是否存在任务响应DTO»»
export interface IJSONResultListDevicePersonnelCapabilityWhetherATaskResponseDTOExists {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IDevicePersonnelCapabilityWhetherThereIsATaskResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备人员能力是否存在任务响应DTO
export interface IDevicePersonnelCapabilityWhetherThereIsATaskResponseDTO {
    // 员工名称
    employeeName: string;
}
