import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/应用相关的角色权限/getRolePermissionsByAppIdUsingPOST
*/
export default function fetchMethod(options: { params: { appId?: string } }, extraOptions?: any) {
    return http<IJSONResultListAppliesTheRolePermissionResponseDTO>(
        {
            url: "/plk-uaa-service/rolePermissionApp/getRolePermissionsByAppId",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«应用角色权限响应DTO»» */
export interface IJSONResultListAppliesTheRolePermissionResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IApplicationRolePermissionRespondsToTheDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 应用角色权限响应DTO */
export interface IApplicationRolePermissionRespondsToTheDTO {
    /** 角色id */
    roleId?: string;
    /** 角色名称 */
    roleName?: string;
    /** 权限码集 */
    permissionCodes?: string[];
    /** 数据权限集 */
    roleDataAuthList?: IEnterpriseRolePermissionResponse[];
}
/** 企业角色权限响应 */
export interface IEnterpriseRolePermissionResponse {
    /** 数据权限类型 */
    dataAuthType?: EEnterpriseRolePermissionResponse_dataAuthType;
    /** 应用id */
    appId?: string;
    /** 企业路由code */
    enterpriseRouterCode?: string;
    /** 数据权限对应的字段列表(只针对表单字段类型) */
    roleDataAuthFieldList?: ITheRoleDataPermissionFieldRespondsToTheDTO[];
}
/** 角色数据权限字段响应DTO */
export interface ITheRoleDataPermissionFieldRespondsToTheDTO {
    /** 流程表单字段序列号 */
    appFieldSerialNo?: string;
    /** 流程表单字段名 */
    appFieldName?: string;
}

export enum EEnterpriseRolePermissionResponse_dataAuthType {
    /** 表单字段 */
    FLOW_FIELD = "FLOW_FIELD",
    /** 本人 */
    SELF = "SELF",
    /** 所属部门 */
    DEPT = "DEPT",
    /** 全部 */
    ALL = "ALL"
}
