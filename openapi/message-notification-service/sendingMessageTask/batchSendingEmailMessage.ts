import { http } from '@/api/http';

// http://47.108.139.107:17600/doc.html#/default/发送消息任务模板/batchSendingEmailMessageUsingPOST
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/message-notification-service/sendingMessageTask/batchSendingEmailMessage",
            method: "post",
        },
        extraOptions,
    );
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
