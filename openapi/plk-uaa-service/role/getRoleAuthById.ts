import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/角色相关/getRoleAuthByIdUsingGET
*/
export default function fetchMethod(options: { params: { Id?: string } }, extraOptions?: any) {
    return http<IJSONResultResponseToRolePermissionsAndEmployeeInformation>(
        {
            url: "/plk-uaa-service/role/getRoleAuthById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«角色权限及员工信息响应» */
export interface IJSONResultResponseToRolePermissionsAndEmployeeInformation {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IRoleRightsAndEmployeeInformationResponse;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 角色权限及员工信息响应 */
export interface IRoleRightsAndEmployeeInformationResponse {
    /** 应用级别 */
    applicationLevel?: ERoleRightsAndEmployeeInformationResponse_applicationLevel;
    /** 角色编码 */
    code?: string;
    /** 路由对应的数据权限集 */
    dataAuths?: IEnterpriseDataPermissionResponse[];
    /** 角色描述 */
    description?: string;
    /** id */
    id?: string;
    /** 角色名 */
    name?: string;
    /** 勾选的权限码集 */
    permissionCodes?: string[];
    /** 服务业务ID */
    serviceBusinessId?: string;
    /** 服务对象ID */
    serviceObjectId?: string;
    /** 用户集 */
    users?: IEnterpriseUserEmployeeInformationResponse[];
}
/** 企业数据权限响应 */
export interface IEnterpriseDataPermissionResponse {
    /** 数据权限集 */
    dataAuthList?: IEnterpriseDataPermissionListResponse[];
    /** 路由code */
    routerCode?: string;
}
/** 企业数据权限列表响应 */
export interface IEnterpriseDataPermissionListResponse {
    /** 数据权限类型 */
    dataAuthType?: EEnterpriseDataPermissionListResponse_dataAuthType;
    /** 数据权限对应的字段列表(只针对表单字段类型) */
    roleDataAuthFieldList?: ITheRoleDataPermissionFieldRespondsToTheDTO[];
}
/** 角色数据权限字段响应DTO */
export interface ITheRoleDataPermissionFieldRespondsToTheDTO {
    /** 流程表单字段名 */
    appFieldName?: string;
    /** 流程表单字段序列号 */
    appFieldSerialNo?: string;
}
/** 企业用户员工信息响应 */
export interface IEnterpriseUserEmployeeInformationResponse {
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人名称 */
    createUsername?: string;
    /** 数据状态 */
    dataStatus?: number;
    /** 员工 */
    employee?: IEmployeeInformationResponse;
    /** 更新时间 */
    updateTime?: number;
    /** 更新人id */
    updateUserId?: string;
    /** 更新人名称 */
    updateUsername?: string;
    /** 用户id */
    userId?: string;
}
/** 员工信息响应 */
export interface IEmployeeInformationResponse {
    /** 编码 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建人id */
    createUserId?: string;
    /** 创建人名称 */
    createUsername?: string;
    /** 数据状态 */
    dataStatus?: number;
    /** 邮件 */
    email?: string;
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 手机号 */
    telephone?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新人id */
    updateUserId?: string;
    /** 更新人名称 */
    updateUsername?: string;
}

export enum ERoleRightsAndEmployeeInformationResponse_applicationLevel {
    /** 项目管理 */
    PROJECT_MANAGER = "PROJECT_MANAGER",
    /** 企业 */
    ENTERPRISE = "ENTERPRISE"
}

export enum EEnterpriseDataPermissionListResponse_dataAuthType {
    /** 表单字段 */
    FLOW_FIELD = "FLOW_FIELD",
    /** 本人 */
    SELF = "SELF",
    /** 所属部门 */
    DEPT = "DEPT",
    /** 全部 */
    ALL = "ALL"
}
