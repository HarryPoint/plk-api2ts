// TransferFileRequestDTO
export interface ITransferFileRequestDTO {
    // 邮件记录ID
    sendingEmailRecordId: number;
    // undefined
    sendingEmailAttachmentId: number;
    // 文件ID列表
    attachmentList: IAttachmentRequestDTO[];
}
// AttachmentRequestDTO
export interface IAttachmentRequestDTO {
    // undefined
    fileKey: number;
    // undefined
    name: string;
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
