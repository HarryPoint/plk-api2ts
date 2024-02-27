import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/发送邮件记录/reSendEmailUsingPOST
*/
export default function fetchMethod(options: { data: IReEmailSendingEmailRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/sendingEmailRecord/reSendEmail",
            method: "post",
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
