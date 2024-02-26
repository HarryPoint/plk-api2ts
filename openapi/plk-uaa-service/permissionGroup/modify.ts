import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/权限组相关/modifyUsingPOST_9
*/
export default function fetchMethod(options: { data: IPermissionGroupModifiesTheDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/permissionGroup/modify",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 权限组修改 DTO */
export interface IPermissionGroupModifiesTheDTO {
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 权限码集 */
    permissionIds?: number[];
    /** id */
    id?: number;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
