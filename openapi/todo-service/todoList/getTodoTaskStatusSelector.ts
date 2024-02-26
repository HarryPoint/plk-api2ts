import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16600/doc.html#/default/待办相关/getTodoTaskStatusSelectorUsingGET
*/
export default function fetchMethod(options: { params: { appName?: string; enterpriseId?: number; queryStatus?: EqueryStatus; userId?: number } }, extraOptions?: any) {
    return http<IJSONResultListstring>(
        {
            url: "/todo-service/todoList/getTodoTaskStatusSelector",
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

export enum EqueryStatus {
    NOT_HANDLE = "NOT_HANDLE",
    OVERDUE = "OVERDUE",
    HANDLED = "HANDLED",
    CREATED_BY_ME = "CREATED_BY_ME",
    CARBON_COPY_TO_ME = "CARBON_COPY_TO_ME",
    NOT_READ = "NOT_READ",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETE = "COMPLETE",
    FAILED = "FAILED"
}
