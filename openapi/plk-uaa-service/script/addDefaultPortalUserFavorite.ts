import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:18100/doc.html#/default/迁移脚本相关/addDefaultPortalUserFavoriteUsingGET
*/
export default function fetchMethod(options: { data: string }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/script/addDefaultPortalUserFavorite",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
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
    ts?: string;
}
