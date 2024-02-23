import { get } from '@/api/http';
 
// http://47.108.139.107:17600/doc.html#/default/消息相关/getNotReadCountUsingGET
export default function fetchMethod(params: { clientCode: string; enterpriseId: number; userId: number }) {
    return get<IJSONResultint['data']>({
      url: "/message-notification-service/message/getNotReadCount",
      params,
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
