import { http } from '@/api/http';

// http://47.108.139.107:16600/doc.html#/default/待办相关/updateTodoBusinessStatusUsingGET
export default function fetchMethod(params: { enterpriseId: number; flowPathTaskId: number; flowPathWorkOrderId: number; statusDesc: string }) {
    return http<IJSONResultobject>({
        url: "/todo-service/todoList/updateTodoBusinessStatus",
        method: "get",
        params,
    });
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}