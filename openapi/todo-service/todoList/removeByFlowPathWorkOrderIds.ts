import { post } from '@/api/http';
 
// http://47.108.139.107:16600/doc.html#/default/待办相关/removeByFlowPathWorkOrderIdsUsingPOST
export default function fetchMethod(data: number[], params: { enterpriseId: number }) {
    return post<IJSONResultobject['data']>({
      url: "/todo-service/todoList/removeByFlowPathWorkOrderIds",
      data,
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
