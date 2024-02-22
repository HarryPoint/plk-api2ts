import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/生产质检管理/getUserWaitHandleCountUsingGET_1
export function fetchMethod(params: { enterpriseId: number; userId: number }) {
    return get({
      url: "/masterdata-service/qualityProduceTask/getUserWaitHandleCount",
      params,
    });
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
