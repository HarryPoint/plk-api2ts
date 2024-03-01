import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:18100/doc.html#/default/应用相关的角色权限/assignAuthUsingPOST
*/
export default function fetchMethod(options: { data: IRolePermissionApplicationAuthorizationRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/rolePermissionApp/assignAuth",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 角色权限应用授权请求DTO */
export interface IRolePermissionApplicationAuthorizationRequestDTO {
    /** 应用code */
    appCode?: string;
    /** 应用id */
    appId?: string;
    /** 角色权限信息集 */
    rolePermissions?: IRoleRightsApplyAuthorizationDetailsToRequestTheDTO[];
}
/** 角色权限应用授权明细请求DTO */
export interface IRoleRightsApplyAuthorizationDetailsToRequestTheDTO {
    /** 新增权限码集 */
    addPermissionCodes?: string[];
    /** 数据权限集 */
    dataAuthList?: IEnterpriseDataPermissionListResponse1[];
    /** 删除权限码集 */
    removePermissionCodes?: string[];
    /** 角色id */
    roleId?: string;
}
/** 企业数据权限列表响应_1 */
export interface IEnterpriseDataPermissionListResponse1 {
    /** 数据权限类型 */
    dataAuthType?: EEnterpriseDataPermissionListResponse1_dataAuthType;
    /** 数据权限对应的字段列表(只针对表单字段类型) */
    roleDataAuthFieldList?: IEditTheDTOForRoleDataPermissionField[];
}
/** 角色数据权限字段编辑DTO */
export interface IEditTheDTOForRoleDataPermissionField {
    /** 流程表单字段名 */
    appFieldName?: string;
    /** 流程表单字段序列号 */
    appFieldSerialNo?: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EEnterpriseDataPermissionListResponse1_dataAuthType {
    /** 表单字段 */
    FLOW_FIELD = "FLOW_FIELD",
    /** 本人 */
    SELF = "SELF",
    /** 所属部门 */
    DEPT = "DEPT",
    /** 全部 */
    ALL = "ALL"
}
