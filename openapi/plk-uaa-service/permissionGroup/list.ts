import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/权限组相关/listUsingGET_2
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListPermissionGroupRespondsToTheDTO>(
        {
            url: "/plk-uaa-service/permissionGroup/list",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«权限组响应 DTO»» */
export interface IJSONResultListPermissionGroupRespondsToTheDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPermissionGroupRespondsToDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 权限组响应 DTO */
export interface IPermissionGroupRespondsToDTO {
    /** id */
    id?: string;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
}
