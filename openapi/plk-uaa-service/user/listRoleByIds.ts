import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/用户账号相关/listRoleByIdsUsingPOST
*/
export default function fetchMethod(options: { data: IIdSetInformation }, extraOptions?: any) {
    return http<IJSONResultListResponseToTheRoleAndUserIdInformation>(
        {
            url: "/plk-uaa-service/user/listRoleByIds",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** id集 信息 */
export interface IIdSetInformation {
    /** id集 */
    ids: string[];
}
/** JSONResult«List«角色及用户id信息响应»» */
export interface IJSONResultListResponseToTheRoleAndUserIdInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IRoleAndUserIdInformationResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 角色及用户id信息响应 */
export interface IRoleAndUserIdInformationResponse {
    /** id */
    id?: string;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 是否是超级管理员 */
    isManage?: ERoleAndUserIdInformationResponse_isManage;
    /** 是否是管理员 */
    isAdmin?: ERoleAndUserIdInformationResponse_isAdmin;
    /** 描述 */
    description?: string;
    /** 用户id */
    userId?: string;
    /** 应用级别 */
    applicationLevel?: ERoleAndUserIdInformationResponse_applicationLevel;
}

export enum ERoleAndUserIdInformationResponse_isManage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ERoleAndUserIdInformationResponse_isAdmin {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ERoleAndUserIdInformationResponse_applicationLevel {
    /** 项目管理 */
    PROJECT_MANAGER = "PROJECT_MANAGER",
    /** 企业 */
    ENTERPRISE = "ENTERPRISE"
}
