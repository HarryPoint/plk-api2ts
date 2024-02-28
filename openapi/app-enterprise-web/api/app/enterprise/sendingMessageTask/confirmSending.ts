import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.139.107:16400/doc.html#/default/消息方案相关/confirmSendingUsingPOST
*/
export default function fetchMethod(options: { data: IConfirmSendingMessageRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/sendingMessageTask/confirmSending",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ConfirmSendingMessageRequestDTO */
export interface IConfirmSendingMessageRequestDTO {
    /** 消息任务的ID */
    id?: string;
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
