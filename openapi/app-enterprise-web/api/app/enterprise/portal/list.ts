import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16400/doc.html#/default/门户相关/listUsingGET_1
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListPortalQueryResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/portal/list",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«门户查询响应DTO»» */
export interface IJSONResultListPortalQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPortalQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 门户查询响应DTO */
export interface IPortalQueryResponseDTO {
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** ID */
    id?: string;
    /** 门户编码 */
    code?: string;
    /** 门户名称 */
    name?: string;
    /** 门户权限列表 */
    portalVisualPermissions?: IPortalVisualPermissionQueryResponseDTO[];
    /** 是否默认 */
    isDefault?: EPortalQueryResponseDTO_isDefault;
    /** 数据状态 */
    dataStatus?: number;
}
/** PortalVisualPermissionQueryResponseDTO */
export interface IPortalVisualPermissionQueryResponseDTO {
    /** ID */
    id?: string;
    /** 门户ID */
    portalId?: string;
    /** 员工ID */
    employeeId?: string;
    /** 员工名称 */
    employeeName?: string;
    /** 角色ID */
    roleId?: string;
    /** 角色名称 */
    roleName?: string;
    /** 超级管理员名称 */
    superManagerName?: string;
}

export enum EPortalQueryResponseDTO_isDefault {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
