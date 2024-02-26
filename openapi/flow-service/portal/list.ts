import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/门户相关/listUsingGET_1
*/
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultListPortalQueryResponseDTO>(
        {
            url: "/flow-service/portal/list",
            method: "get",
        },
        extraOptions,
    );
}
/** JSONResult«List«门户查询响应DTO»» */
export interface IJSONResultListPortalQueryResponseDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IPortalQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 门户查询响应DTO */
export interface IPortalQueryResponseDTO {
    /** 创建用户ID */
    createUserId: number;
    /** 创建用户名 */
    createUserName: string;
    /** 创建部门ID */
    createDeptId: number;
    /** 创建部门名称 */
    createDeptName: string;
    /** 更新部门ID */
    updateDeptId: number;
    /** 更新部门名称 */
    updateDeptName: string;
    /** 创建时间 */
    createTime: string;
    /** 更新用户ID */
    updateUserId: number;
    /** 更新用户名称 */
    updateUserName: string;
    /** 更新时间 */
    updateTime: string;
    /** ID */
    id: number;
    /** 门户编码 */
    code: string;
    /** 门户名称 */
    name: string;
    /** 门户权限列表 */
    portalVisualPermissions: IPortalVisualPermissionQueryResponseDTO[];
    /** 是否默认 */
    isDefault: string;
    /** 数据状态 */
    dataStatus: number;
}
/** PortalVisualPermissionQueryResponseDTO */
export interface IPortalVisualPermissionQueryResponseDTO {
    /** ID */
    id: number;
    /** 门户ID */
    portalId: number;
    /** 员工ID */
    employeeId: number;
    /** 员工名称 */
    employeeName: string;
    /** 角色ID */
    roleId: number;
    /** 角色名称 */
    roleName: string;
    /** 超级管理员名称 */
    superManagerName: string;
}
