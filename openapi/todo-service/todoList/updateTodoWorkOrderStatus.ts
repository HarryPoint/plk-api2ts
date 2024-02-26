import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16600/doc.html#/default/待办相关/updateTodoWorkOrderStatusUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: number; flowPathWorkOrderId?: number; userId?: number; workOrderStatus?: ('HANDLING' | 'COMPLETE' | 'NOT_PASS' | 'STAGING' | 'INVALID') } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/todo-service/todoList/updateTodoWorkOrderStatus",
            method: "get",
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
    ts?: number;
}
