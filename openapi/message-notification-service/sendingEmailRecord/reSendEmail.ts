import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:17600/doc.html#/default/邮件任务/reSendEmailUsingPOST
*/
export default function fetchMethod(options: { data: IReEmailSendingEmailRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/message-notification-service/sendingEmailRecord/reSendEmail",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ReEmailSendingEmailRequestDTO */
export interface IReEmailSendingEmailRequestDTO {
    /** 发送邮件记录ID */
    sendingEmailRecordId?: string;
}
/** JSONResult«string» */
export interface IJSONResultstring {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: EJSONResultstring_data;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EJSONResultstring_data {
    Y = "Y",
    N = "N"
}
