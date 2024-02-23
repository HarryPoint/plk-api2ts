import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/发送邮件记录/reSendEmailUsingPOST
export default function fetchMethod(data: IReEmailSendingEmailRequestDTO) {
    return post<IJSONResultstring['data']>({
      url: "/app-enterprise-web/api/app/enterprise/sendingEmailRecord/reSendEmail",
      data,
    });
}
// ReEmailSendingEmailRequestDTO
export interface IReEmailSendingEmailRequestDTO {
    // 发送邮件记录ID
    sendingEmailRecordId: number;
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
