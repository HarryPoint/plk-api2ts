import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/待办相关/getTodoTaskStatusSelectorUsingGET
*/
export default function fetchMethod(options: { params: { queryStatus?: EqueryStatus } }, extraOptions?: any) {
    return http<IJSONResultListstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/todoList/getTodoTaskStatusSelector",
            method: "GET",
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
    ts?: string;
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
