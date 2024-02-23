import { get } from '@/api/http';
 
// http://47.108.139.107:16600/doc.html#/default/待办相关/getNotHandleCountOfProjectManageUsingGET
export default function fetchMethod() {
    return get<IJSONResultint['data']>({
      url: "/todo-service/todoList/pc/getNotHandleCountOfProjectManage",
    });
}
// JSONResult«int»
export interface IJSONResultint {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
