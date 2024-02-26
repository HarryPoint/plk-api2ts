import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17600/doc.html#/default/邮件任务/reSendEmailUsingPOST
*/
export default function fetchMethod(data: IReEmailSendingEmailRequestDTO, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/message-notification-service/sendingEmailRecord/reSendEmail",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** ReEmailSendingEmailRequestDTO */
export interface IReEmailSendingEmailRequestDTO {
    /** 发送邮件记录ID */
    sendingEmailRecordId?: number;
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
