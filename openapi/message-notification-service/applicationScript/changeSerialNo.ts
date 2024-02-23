import { get } from '@/api/http';
 
// http://47.108.139.107:17600/doc.html#/default/application-script-controller/changeSerialNoUsingGET
export default function fetchMethod() {
    return get<IJSONResultobject['data']>({
      url: "/message-notification-service/applicationScript/changeSerialNo",
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
