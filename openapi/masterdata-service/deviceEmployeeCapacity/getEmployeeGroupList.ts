// 设备人员能力分组查询DTO
export interface I设备人员能力分组查询DTO {
    // 人员id
    employeeIds: number[];
    // 班组id
    classGroupIds: number[];
    // 部门id
    departmentIds: number[];
    // 维修能力
    maintainLevels: string[];
    // 保养能力
    canMaintains: string[];
}
// JSONResult«List«设备人员能力分组响应DTO»»
export interface IJSONResultList设备人员能力分组响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 设备人员能力分组响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
