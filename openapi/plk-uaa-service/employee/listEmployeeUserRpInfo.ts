import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/员工相关/listEmployeeUserRpInfoUsingPOST
*/
export default function fetchMethod(options: { data: IBatchQueryEmployeeUserAssociationInformation }, extraOptions?: any) {
    return http<IJSONResultListEmployeeUserAssociationInformationResponse>(
        {
            url: "/plk-uaa-service/employee/listEmployeeUserRpInfo",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 员工用户关联信息批量查询 */
export interface IBatchQueryEmployeeUserAssociationInformation {
    /** 应用级别 */
    applicationLevel?: EBatchQueryEmployeeUserAssociationInformation_applicationLevel;
    /** 员工id集 */
    employeeIds?: string[];
    /** 服务对象ID */
    serviceObjectId?: string;
}
/** JSONResult«List«员工用户关联信息响应»» */
export interface IJSONResultListEmployeeUserAssociationInformationResponse {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IEmployeeUserAssociationInformationResponse[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 员工用户关联信息响应 */
export interface IEmployeeUserAssociationInformationResponse {
    /** 员工id */
    employeeId?: string;
    /** 是否允许登录 */
    isAllowLogin?: EEmployeeUserAssociationInformationResponse_isAllowLogin;
    /** 角色集 */
    roles?: IRoleMessageResponse[];
    /** 用户id */
    userId?: string;
    /** 用户手机号 */
    userTelephone?: string;
}
/** 角色信息响应 */
export interface IRoleMessageResponse {
    /** 应用级别 */
    applicationLevel?: ERoleMessageResponse_applicationLevel;
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
    /** 描述 */
    description?: string;
    /** id */
    id?: string;
    /** 是否是管理员 */
    isAdmin?: ERoleMessageResponse_isAdmin;
    /** 是否是超级管理员 */
    isManage?: ERoleMessageResponse_isManage;
    /** 名称 */
    name?: string;
    /** 服务业务ID */
    serviceBusinessId?: string;
    /** 服务对象ID */
    serviceObjectId?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新人id */
    updateUserId?: string;
    /** 更新人名称 */
    updateUsername?: string;
}

export enum EBatchQueryEmployeeUserAssociationInformation_applicationLevel {
    /** 项目管理 */
    PROJECT_MANAGER = "PROJECT_MANAGER",
    /** 企业 */
    ENTERPRISE = "ENTERPRISE"
}

export enum EEmployeeUserAssociationInformationResponse_isAllowLogin {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ERoleMessageResponse_applicationLevel {
    /** 项目管理 */
    PROJECT_MANAGER = "PROJECT_MANAGER",
    /** 企业 */
    ENTERPRISE = "ENTERPRISE"
}

export enum ERoleMessageResponse_isAdmin {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ERoleMessageResponse_isManage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
