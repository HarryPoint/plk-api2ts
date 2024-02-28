import { http } from "@/api/http";

/**
* @author lin he
* @link http://47.108.139.107:16500/doc.html#/default/应用权限相关/listCopyPermissionByFlowPathIdListUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListAddsPermissionEdit1>(
        {
            url: "/flow-service/flowPathPermission/listCopyPermissionByFlowPathIdList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«新增权限编辑»»_1 */
export interface IJSONResultListAddsPermissionEdit1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IAddedPermissionEdit1[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
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

export enum EAddedPermissionEdit1_isCanCopy {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
