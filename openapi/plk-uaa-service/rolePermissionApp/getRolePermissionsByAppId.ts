// JSONResult«List«应用角色权限响应DTO»»
export interface IJSONResultListAppliesTheRolePermissionResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IApplicationRolePermissionRespondsToTheDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 应用角色权限响应DTO
export interface IApplicationRolePermissionRespondsToTheDTO {
    // 角色id
    roleId: number;
    // 角色名称
    roleName: string;
    // 权限码集
    permissionCodes: string[];
    // 数据权限集
    roleDataAuthList: IEnterpriseRolePermissionResponse[];
}
// 企业角色权限响应
export interface IEnterpriseRolePermissionResponse {
    // 数据权限类型
    dataAuthType: string;
    // 应用id
    appId: number;
    // 企业路由code
    enterpriseRouterCode: string;
    // 数据权限对应的字段列表(只针对表单字段类型)
    roleDataAuthFieldList: ITheRoleDataPermissionFieldRespondsToTheDTO[];
}
// 角色数据权限字段响应DTO
export interface ITheRoleDataPermissionFieldRespondsToTheDTO {
    // 流程表单字段序列号
    appFieldSerialNo: string;
    // 流程表单字段名
    appFieldName: string;
}
