import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/待办相关/getTodoTaskStatusSelectorUsingGET
*/
export default function fetchMethod(options: { params: { queryStatus?: string } }, extraOptions?: any) {
    return http<IJSONResultListstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/todoList/getTodoTaskStatusSelector",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«string»» */
export interface IJSONResultListstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
