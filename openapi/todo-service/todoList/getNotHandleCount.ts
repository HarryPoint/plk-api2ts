import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16600/doc.html#/default/待办相关/getNotHandleCountUsingGET
*/
export default function fetchMethod(params: { appName?: string; enterpriseId?: number; userId?: number }, extraOptions?: any) {
    return http<IJSONResultint>(
        {
            url: "/todo-service/todoList/getNotHandleCount",
            method: "get",
            params,
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
    ts?: number;
}
