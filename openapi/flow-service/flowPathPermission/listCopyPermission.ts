import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/应用权限相关/listCopyPermissionUsingGET
*/
export default function fetchMethod(params: { flowPathId: number }, extraOptions?: any) {
    return http<IJSONResultListAddsPermissionEdit1>(
        {
            url: "/flow-service/flowPathPermission/listCopyPermission",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«List«新增权限编辑»»_1 */
export interface IJSONResultListAddsPermissionEdit1 {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IAddedPermissionEdit1[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 新增权限编辑_1 */
export interface IAddedPermissionEdit1 {
    /** ID */
    id: number;
    /** 流程字段ID */
    flowPathFormFieldId: number;
    /** 流程字段编码 */
    flowPathFormFieldCode: string;
    /** 流程字段序列号 */
    flowPathFormFieldSerialNo: string;
    /** 是否可以复制 */
    isCanCopy: string;
}
