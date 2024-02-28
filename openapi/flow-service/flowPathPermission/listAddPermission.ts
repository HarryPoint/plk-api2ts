import { http } from "@/api/http";

/**
* @author lin he
* @link http://47.108.139.107:16500/doc.html#/default/应用权限相关/listAddPermissionUsingGET
*/
export default function fetchMethod(options: { params: { flowPathId?: string } }, extraOptions?: any) {
    return http<IJSONResultListAddsPermissionEditing>(
        {
            url: "/flow-service/flowPathPermission/listAddPermission",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«新增权限编辑»» */
export interface IJSONResultListAddsPermissionEditing {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: INewPermissionEdit[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 新增权限编辑 */
export interface INewPermissionEdit {
    /** ID */
    id?: string;
    /** 流程字段ID */
    flowPathFormFieldId?: string;
    /** 流程字段编码 */
    flowPathFormFieldCode?: string;
    /** 流程字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 权限类型 */
    type?: ENewPermissionEdit_type;
}

export enum ENewPermissionEdit_type {
    /** 可编辑 */
    EDIT = "EDIT",
    /** 只读 */
    READONLY = "READONLY",
    /** 隐藏 */
    HIDDEN = "HIDDEN"
}
