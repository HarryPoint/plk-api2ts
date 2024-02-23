import { post } from '@/api/http';
 
// http://47.108.139.107:18100/doc.html#/default/应用相关的角色权限/assignAuthUsingPOST
export default function fetchMethod(data: IRolePermissionApplicationAuthorizationRequestDTO) {
    return post<IJSONResultobject['data']>({
      url: "/plk-uaa-service/rolePermissionApp/assignAuth",
      data,
    });
}
// 角色权限应用授权请求DTO
export interface IRolePermissionApplicationAuthorizationRequestDTO {
    // 应用id
    appId: number;
    // 应用code
    appCode: string;
    // 角色权限信息集
    rolePermissions: IRoleRightsApplyAuthorizationDetailsToRequestTheDTO[];
}
// 角色权限应用授权明细请求DTO
export interface IRoleRightsApplyAuthorizationDetailsToRequestTheDTO {
    // 角色id
    roleId: number;
    // 新增权限码集
    addPermissionCodes: string[];
    // 删除权限码集
    removePermissionCodes: string[];
    // 数据权限集
    dataAuthList: IEnterpriseDataPermissionListResponse1[];
}
// 企业数据权限列表响应_1
export interface IEnterpriseDataPermissionListResponse1 {
    // 数据权限类型
    dataAuthType: string;
    // 数据权限对应的字段列表(只针对表单字段类型)
    roleDataAuthFieldList: IEditTheDTOForRoleDataPermissionField[];
}
// 角色数据权限字段编辑DTO
export interface IEditTheDTOForRoleDataPermissionField {
    // 流程表单字段序列号
    appFieldSerialNo: string;
    // 流程表单字段名
    appFieldName: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
