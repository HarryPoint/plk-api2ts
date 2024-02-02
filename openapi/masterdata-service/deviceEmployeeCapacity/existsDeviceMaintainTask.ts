// 设备人员能力是否存在任务请求DTO
export interface I设备人员能力是否存在任务请求DTO {
    // 员工能力ids
    deviceEmployeeCapacityIds: number[];
}
// JSONResult«List«设备人员能力是否存在任务响应DTO»»
export interface IJSONResultList设备人员能力是否存在任务响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I设备人员能力是否存在任务响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备人员能力是否存在任务响应DTO
export interface I设备人员能力是否存在任务响应DTO {
    // 员工名称
    employeeName: string;
}
