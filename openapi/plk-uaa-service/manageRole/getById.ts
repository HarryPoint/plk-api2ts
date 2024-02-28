import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/运营角色相关/getByIdUsingPOST
*/
export default function fetchMethod(options: { data: IIdInformation }, extraOptions?: any) {
    return http<IJSONResultOperationRolePermissionInformationResponseObject>(
        {
            url: "/plk-uaa-service/manageRole/getById",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** Id 信息 */
export interface IIdInformation {
    /** id */
    id?: string;
}
/** JSONResult«运营角色权限信息响应对象» */
export interface IJSONResultOperationRolePermissionInformationResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IOperationRolePermissionInformationResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 运营角色权限信息响应对象 */
export interface IOperationRolePermissionInformationResponseObject {
    /** 数据状态 */
    dataStatus?: number;
    /** id */
    id?: string;
    /** 创建人id */
    createUserId?: string;
    /** 创建人名称 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新人id */
    updateUserId?: string;
    /** 更新人名称 */
    updateUsername?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 角色权限码集 */
    permissionCodeList?: string[];
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 是否是超级管理员 */
    isManage?: EOperationRolePermissionInformationResponseObject_isManage;
    /** 是否是管理员 */
    isAdmin?: EOperationRolePermissionInformationResponseObject_isAdmin;
    /** 描述 */
    description?: string;
    /** 关联的账号数 */
    relationUserCount?: number;
}

export enum EOperationRolePermissionInformationResponseObject_isManage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EOperationRolePermissionInformationResponseObject_isAdmin {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
