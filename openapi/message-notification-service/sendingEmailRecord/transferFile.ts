import { http } from '@/api/http';

// http://47.108.139.107:17600/doc.html#/default/邮件任务/transferFilesUsingPOST
export default function fetchMethod(data: ITransferFileRequestDTO, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/message-notification-service/sendingEmailRecord/transferFile",
            method: "post",
            data,
        },
        extraOptions,
    );
}
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
