// 设备人员能力未设置人员查询DTO
export interface I设备人员能力未设置人员查询DTO {
    // 搜索参数
    searchValue: string;
}
// JSONResult«List«设备人员能力未设置人员响应DTO»»
export interface IJSONResultList设备人员能力未设置人员响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I设备人员能力未设置人员响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设备人员能力未设置人员响应DTO
export interface I设备人员能力未设置人员响应DTO {
    // 员工id
    employeeId: number;
    // 员工code
    employeeCode: string;
    // 员工姓名
    employeeName: string;
    // 部门id
    departmentId: number;
    // 部门名称
    departmentName: string;
    // 班组id
    classGroupId: number;
    // 班组名称
    classGroupName: string;
}
