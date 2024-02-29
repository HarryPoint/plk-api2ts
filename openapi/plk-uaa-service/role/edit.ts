import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.139.107:18100/doc.html#/default/角色相关/editUsingPOST_2
*/
export default function fetchMethod(options: { data: IRoleAuthorizationEditRequest }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/plk-uaa-service/role/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 角色授权编辑请求 */
export interface IRoleAuthorizationEditRequest {
    /** id */
    id?: string;
    /** 角色名 */
    name?: string;
    /** 角色编码 */
    code?: string;
    /** 角色描述 */
    description?: string;
    /** 员工id集 */
    userIds?: string[];
    /** 是否是管理员 */
    isAdmin?: ERoleAuthorizationEditRequest_isAdmin;
    /** 勾选的权限码集 */
    permissionCodes?: string[];
    /** 路由对应的数据权限集 */
    dataAuths?: IEnterpriseDataPermissionResponse1[];
    /** 勾选的全局权限码集 */
    globalPermissionCodes?: string[];
    /** 应用级别 */
    applicationLevel?: ERoleAuthorizationEditRequest_applicationLevel;
    /** 服务对象ID */
    serviceObjectId?: string;
    /** 服务业务ID */
    serviceBusinessId?: string;
}
/** 企业数据权限响应_1 */
export interface IEnterpriseDataPermissionResponse1 {
    /** 路由code */
    routerCode?: string;
    /** 数据权限集 */
    dataAuthList?: IEnterpriseDataPermissionListResponse1[];
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
    /** 流程表单字段序列号 */
    appFieldSerialNo?: string;
    /** 流程表单字段名 */
    appFieldName?: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum ERoleAuthorizationEditRequest_isAdmin {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ERoleAuthorizationEditRequest_applicationLevel {
    /** 项目管理 */
    PROJECT_MANAGER = "PROJECT_MANAGER",
    /** 企业 */
    ENTERPRISE = "ENTERPRISE"
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
