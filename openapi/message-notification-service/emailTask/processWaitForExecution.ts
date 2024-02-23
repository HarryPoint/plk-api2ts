import { post } from '@/api/http';
 
// http://47.108.139.107:17600/doc.html#/default/邮件任务/processWaitForExecutionUsingPOST
export default function fetchMethod() {
    return post<IJSONResultstring['data']>({
      url: "/message-notification-service/emailTask/processWaitForExecution",
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
