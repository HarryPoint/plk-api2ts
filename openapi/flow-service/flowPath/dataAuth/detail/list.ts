// 流程角色数据权限详情搜索VO
export interface IProcessRoleDataPermissionDetailsSearchVO {
    // 角色id集
    roleIds: number[];
    // 流程id
    flowPathId: number;
}
// JSONResult«List«流程角色数据权限详情VO»»
export interface IJSONResultListProcessRoleDataPermissionDetailsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcessRoleDataPermissionDetailsVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 流程角色数据权限详情VO
export interface IProcessRoleDataPermissionDetailsVO {
    // 数据权限类型
    dataAuthType: string;
    // 流程角色数据权限字段详情列表
    flowPathDataAuthFieldDetailList: IProcessRoleDataPermissionFieldDetailsVO[];
}
// 流程角色数据权限字段详情VO
export interface IProcessRoleDataPermissionFieldDetailsVO {
    // 流程表单字段序列号
    flowPathFieldSerialNo: string;
    // 流程表单字段编号
    flowPathFieldCode: string;
    // 字段类型
    fieldType: string;
    // 字段组织类型
    fieldOrganizationType: string;
    // 是否是表格内字段
    isTableField: string;
    // 父级流程表单code - 表格内字段有值
    parentFlowPathFormFieldCode: string;
    // 当动态控件选择了当前字段后，对应取关联表单的值是
    dynamicControlValueFieldSerialNo: string;
}
