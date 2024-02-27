import { http } from "@/api/http";

/**
* @link http://47.108.139.107:17600/doc.html#/default/邮件任务/getWaitForExecutionUsingPOST
*/
export default function fetchMethod(options: { data: IEmailTaskWaitForExecutionQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultEmailTaskWaitForExecutionQueryResponseDTO>(
        {
            url: "/message-notification-service/emailTask/getWaitForExecution",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** EmailTaskWaitForExecutionQueryRequestDTO */
export interface IEmailTaskWaitForExecutionQueryRequestDTO {
    /** undefined */
    fileType: string;
}
/** JSONResult«EmailTaskWaitForExecutionQueryResponseDTO» */
export interface IJSONResultEmailTaskWaitForExecutionQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEmailTaskWaitForExecutionQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** EmailTaskWaitForExecutionQueryResponseDTO */
export interface IEmailTaskWaitForExecutionQueryResponseDTO {
    /** ID */
    id?: string;
    /** 邮件名称 */
    emailName?: string;
    /** 收件人 */
    addressee?: string;
    /** 标题 */
    title?: string;
    /** 邮件正文 */
    content?: string;
    /** 发送时间 */
    sendingTime?: number;
    /** 下次发送时间 */
    nextSendingTime?: number;
    /** 上次发送时间 */
    lastSendingTime?: number;
    /** 引用ID列表- 这里指的是报表模板的ID列表 */
    refIdList?: string[];
}
