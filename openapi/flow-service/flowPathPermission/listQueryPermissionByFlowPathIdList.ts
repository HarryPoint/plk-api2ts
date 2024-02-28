import { http } from "@/api/http";

/**
* @author lin he
* @link http://47.108.135.148:16500/doc.html#/default/应用权限相关/listQueryPermissionByFlowPathIdListUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListEditTheQueryPermission>(
        {
            url: "/flow-service/flowPathPermission/listQueryPermissionByFlowPathIdList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«查询权限编辑»» */
export interface IJSONResultListEditTheQueryPermission {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IQueryPermissionEditing[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
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

export enum EQueryPermissionEditing_isVisible {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
