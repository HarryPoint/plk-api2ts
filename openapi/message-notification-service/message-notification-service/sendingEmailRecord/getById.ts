// JSONResult«SendingEmailRecordDTO»
export interface IJSONResultSendingEmailRecordDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ISendingEmailRecordDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// SendingEmailRecordDTO
export interface ISendingEmailRecordDTO {
    // ID
    id: number;
    // 邮件名称
    emailName: string;
    // 邮件任务ID
    emailTaskId: number;
    // 邮件任务-标题
    title: string;
    // 内容
    content: string;
    // 发送邮件状态
    status: string;
    // 发送时间
    sendingTime: string;
    // 发送来源
    sendingFrom: string;
    // 收件人地址
    addressee: string;
    //  是否已准备好数据，只有准备好的邮件才能重新发送
    isReady: string;
    // 失败的原因
    failureReason: string;
    // 发送邮件附件列表
    attachmentList: ISendingEmailAttachmentDTO[];
}
// SendingEmailAttachmentDTO
export interface ISendingEmailAttachmentDTO {
    // undefined
    id: number;
    // 发送邮件记录ID
    sendingEmailRecordId: number;
    // 文件Key
    fileKey: number;
    // 附件名称
    name: string;
}
