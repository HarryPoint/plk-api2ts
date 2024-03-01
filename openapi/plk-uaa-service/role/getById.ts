import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/角色相关/getByIdUsingGET_1
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultResponseToRoleInformation>(
        {
            url: "/plk-uaa-service/role/getById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«角色信息响应» */
export interface IJSONResultResponseToRoleInformation {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IRoleMessageResponse;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
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
