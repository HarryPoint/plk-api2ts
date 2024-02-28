import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:17600/doc.html#/default/邮件任务/getByIdUsingGET_2
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultSendingEmailRecordDTO>(
        {
            url: "/message-notification-service/sendingEmailRecord/getById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«SendingEmailRecordDTO» */
export interface IJSONResultSendingEmailRecordDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ISendingEmailRecordDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** SendingEmailRecordDTO */
export interface ISendingEmailRecordDTO {
    /** ID */
    id?: string;
    /** 邮件名称 */
    emailName?: string;
    /** 邮件任务ID */
    emailTaskId?: string;
    /** 邮件任务-标题 */
    title?: string;
    /** 内容 */
    content?: string;
    /** 发送邮件状态 */
    status?: ESendingEmailRecordDTO_status;
    /** 发送时间 */
    sendingTime?: number;
    /** 发送来源 */
    sendingFrom?: string;
    /** 收件人地址 */
    addressee?: string;
    /**  是否已准备好数据，只有准备好的邮件才能重新发送 */
    isReady?: ESendingEmailRecordDTO_isReady;
    /** 失败的原因 */
    failureReason?: string;
    /** 发送邮件附件列表 */
    attachmentList?: ISendingEmailAttachmentDTO[];
}
/** SendingEmailAttachmentDTO */
export interface ISendingEmailAttachmentDTO {
    /** undefined */
    id?: string;
    /** 发送邮件记录ID */
    sendingEmailRecordId?: string;
    /** 文件Key */
    fileKey?: string;
    /** 附件名称 */
    name?: string;
}

export enum ESendingEmailRecordDTO_status {
    /** 待发送 */
    NONE = "NONE",
    /** 发送成功 */
    SENT_SUCCESS = "SENT_SUCCESS",
    /** 发送失败 */
    SENT_FAILURE = "SENT_FAILURE"
}

export enum ESendingEmailRecordDTO_isReady {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
