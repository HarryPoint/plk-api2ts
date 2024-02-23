import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/航发相关/syncTodolistDeletedUsingPOST
export default function fetchMethod(data: IKingdeeBacklogActionRequest) {
    return post<IJSONResultobject>({
      url: "/masterdata-service/hangFa/syncTodolistDeleted",
      data,
    });
}
// 金蝶待办动作请求
export interface IKingdeeBacklogActionRequest {
    // 待办id
    id: string;
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
