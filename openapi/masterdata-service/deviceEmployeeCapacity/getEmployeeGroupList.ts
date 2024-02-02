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
    data: I设备人员能力分组响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备人员能力分组响应DTO
export interface I设备人员能力分组响应DTO {
    // 人员能力id
    id: number;
    // 编号
    code: string;
    // 人员id
    employeeId: number;
    // 班组id
    classGroupId: number;
    // 部门id
    departmentId: number;
    // 人员名称
    employeeName: string;
    // 班组
    classGroupName: string;
    // 部门
    departmentName: string;
    // 人员
    items: I设备人员能力分组项响应DTO[];
}
// 设备人员能力分组项响应DTO
export interface I设备人员能力分组项响应DTO {
    // 人员能力明细id
    detailId: number;
    // 设备类型id
    deviceTypeId: number;
    // 设备类型
    deviceTypeName: string;
    // 维修能力
    maintainLevel: string;
    // 保养能力
    canMaintain: string;
}
