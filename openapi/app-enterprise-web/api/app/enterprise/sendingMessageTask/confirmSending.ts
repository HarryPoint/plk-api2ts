import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/消息方案相关/confirmSendingUsingPOST
*/
export default function fetchMethod(data: IConfirmSendingMessageRequestDTO, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/sendingMessageTask/confirmSending",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** ConfirmSendingMessageRequestDTO */
export interface IConfirmSendingMessageRequestDTO {
    /** 消息任务的ID */
    id?: number;
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
