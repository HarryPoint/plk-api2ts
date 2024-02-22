import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产任务相关/checkTodoTaskByUserUsingGET
export function fetchMethod(params: { enterpriseId: number; userId: number }) {
    return get({
      url: "/masterdata-service/produceTask/checkTodoTaskByUser",
      params,
    });
}
// JSONResult«boolean»
export interface IJSONResultboolean {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: boolean;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
