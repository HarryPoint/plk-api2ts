// 设备人员能力批量编辑DTO
export interface IEquipmentPersonnelAbilityToBatchEditDtos {
    // 编辑项列表
    edits: IEquipmentPersonnelAbilityToEditDTO[];
    // 删除项列表
    deleteIds: number[];
}
// 设备人员能力编辑DTO
export interface IEquipmentPersonnelAbilityToEditDTO {
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
    // 编辑能力明细
    detailEdits: IEquipmentPersonnelCapabilityDetailsEditDTO[];
}
// 设备人员能力明细编辑DTO
export interface IEquipmentPersonnelCapabilityDetailsEditDTO {
    // 人员能力明细id
    detailId: number;
    // 设备类型id
    deviceTypeId: number;
    // 维修能力
    maintainLevel: string;
    // 保养能力
    canMaintain: string;
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
