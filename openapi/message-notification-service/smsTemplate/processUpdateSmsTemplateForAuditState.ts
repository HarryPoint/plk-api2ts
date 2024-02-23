import { post } from '@/api/http';
 
// http://47.108.139.107:17600/doc.html#/default/短信模板/processUpdateSmsTemplateForAuditStateUsingPOST
export default function fetchMethod() {
    return post<IJSONResultstring['data']>({
      url: "/message-notification-service/smsTemplate/processUpdateSmsTemplateForAuditState",
    });
}
// JSONResult«string»
export interface IJSONResultstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
