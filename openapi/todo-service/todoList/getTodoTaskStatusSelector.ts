import { get } from '@/api/http';
 
// http://47.108.139.107:16600/doc.html#/default/待办相关/getTodoTaskStatusSelectorUsingGET
export default function fetchMethod(params: { appName: string; enterpriseId: number; queryStatus: string; userId: number }) {
    return get<IJSONResultListstring['data']>({
      url: "/todo-service/todoList/getTodoTaskStatusSelector",
      params,
    });
}
// JSONResult«List«string»»
export interface IJSONResultListstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
