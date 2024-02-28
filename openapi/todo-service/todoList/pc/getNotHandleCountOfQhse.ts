import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16600/doc.html#/default/待办相关/getNotHandleCountOfQhseUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultint>(
        {
            url: "/todo-service/todoList/pc/getNotHandleCountOfQhse",
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
