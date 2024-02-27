import { http } from "@/api/http";

/**
* @link http://47.108.139.107:18100/doc.html#/default/用户账号相关/getRoleIdsByIdUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultListlong>(
        {
            url: "/plk-uaa-service/user/getRoleIdsById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«long»» */
export interface IJSONResultListlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
