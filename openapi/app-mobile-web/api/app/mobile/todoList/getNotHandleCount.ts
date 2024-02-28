import { http } from "@/api/http";

/**
* @author TanPeng
* @link http://47.108.135.148:17400/doc.html#/default/待办相关/getNotHandleCountUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultint>(
        {
            url: "/app-mobile-web/api/app/mobile/todoList/getNotHandleCount",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«int» */
export interface IJSONResultint {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
