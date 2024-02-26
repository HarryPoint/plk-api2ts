import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17600/doc.html#/default/邮件任务/generateFileFailUsingPOST
*/
export default function fetchMethod(options: { data: IGenerateFileFailRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/message-notification-service/sendingEmailRecord/generateFileFail",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** GenerateFileFailRequestDTO */
export interface IGenerateFileFailRequestDTO {
    /** 邮件记录ID */
    mailRecordId?: number;
    /** 错误原因 */
    failureReason?: string;
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
