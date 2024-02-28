import { http } from "@/api/http";

/**
* @author lin he
* @link http://47.108.135.148:16500/doc.html#/default/应用权限相关/getByFlowPathIdUsingGET
*/
export default function fetchMethod(options: { params: { flowPathId?: string } }, extraOptions?: any) {
    return http<IJSONResultQueryPermissionQueryResponse>(
        {
            url: "/flow-service/flowPathPermission/getByFlowPathId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«查询权限查询Response» */
export interface IJSONResultQueryPermissionQueryResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IQueryPermissionQueryResponse;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 查询权限查询Response */
export interface IQueryPermissionQueryResponse {
    /** 表单控制 - 编辑权限列表 */
    editPermissionList?: IAddedPermissionEdit2[];
    /** 表单控制 - 新增权限列表 */
    addPermissionList?: INewPermissionEdit[];
    /** 表单控制 - 查询权限列表 */
    queryPermissionList?: IQueryPermissionEditing[];
    /** 表单控制 - 复制权限列表 */
    copyPermissionList?: IAddedPermissionEdit1[];
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
/** 查询权限编辑 */
export interface IQueryPermissionEditing {
    /** ID */
    id?: string;
    /** 流程字段ID */
    flowPathFormFieldId?: string;
    /** 流程字段编码 */
    flowPathFormFieldCode?: string;
    /** 流程字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 是否可见 */
    isVisible?: EQueryPermissionEditing_isVisible;
}
/** 新增权限编辑_1 */
export interface IAddedPermissionEdit1 {
    /** ID */
    id?: string;
    /** 流程字段ID */
    flowPathFormFieldId?: string;
    /** 流程字段编码 */
    flowPathFormFieldCode?: string;
    /** 流程字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 是否可以复制 */
    isCanCopy?: EAddedPermissionEdit1_isCanCopy;
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

export enum ENewPermissionEdit_type {
    /** 可编辑 */
    EDIT = "EDIT",
    /** 只读 */
    READONLY = "READONLY",
    /** 隐藏 */
    HIDDEN = "HIDDEN"
}

export enum EQueryPermissionEditing_isVisible {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EAddedPermissionEdit1_isCanCopy {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
