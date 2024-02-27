import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16500/doc.html#/default/应用权限相关/listEditPermissionUsingGET
*/
export default function fetchMethod(options: { params: { flowPathId?: string } }, extraOptions?: any) {
    return http<IJSONResultListAddsPermissionEdit2>(
        {
            url: "/flow-service/flowPathPermission/listEditPermission",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«新增权限编辑»»_2 */
export interface IJSONResultListAddsPermissionEdit2 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IAddedPermissionEdit2[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 新增权限编辑_2 */
export interface IAddedPermissionEdit2 {
    /** ID */
    id?: string;
    /** 流程状态 */
    flowStatus?: EAddedPermissionEdit2_flowStatus;
    /** 是否可编辑 */
    isEditable?: EAddedPermissionEdit2_isEditable;
    /** 是否禁用 */
    isDisabled?: EAddedPermissionEdit2_isDisabled;
}

export enum EAddedPermissionEdit2_flowStatus {
    /** 进行中 */
    HANDLING = "HANDLING",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 未通过 */
    NOT_PASS = "NOT_PASS",
    /** 暂存 */
    STAGING = "STAGING",
    /** 作废/停用 */
    INVALID = "INVALID"
}

export enum EAddedPermissionEdit2_isEditable {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EAddedPermissionEdit2_isDisabled {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
