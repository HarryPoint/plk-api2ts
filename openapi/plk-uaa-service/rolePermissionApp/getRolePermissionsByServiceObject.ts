import { post } from '@/api/http';
 
// http://47.108.139.107:18100/doc.html#/default/应用相关的角色权限/getRolePermissionsByServiceObjectUsingPOST
export default function fetchMethod(data: IRoleRightsAuthorizationQueryRequestDTO) {
    return post<IJSONResultListAppliesTheRolePermissionResponseDTO['data']>({
      url: "/plk-uaa-service/rolePermissionApp/getRolePermissionsByServiceObject",
      data,
    });
}
// 角色权限授权查询请求DTO
export interface IRoleRightsAuthorizationQueryRequestDTO {
    // 应用级别
    applicationLevel: string;
    // 服务对象ID
    serviceObjectId: number;
    // 角色ids
    roleIds: number[];
}
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
