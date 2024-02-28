import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:17600/doc.html#/default/邮件任务/transferFilesUsingPOST
*/
export default function fetchMethod(options: { data: ITransferFileRequestDTO }, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/message-notification-service/sendingEmailRecord/transferFile",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** TransferFileRequestDTO */
export interface ITransferFileRequestDTO {
    /** 邮件记录ID */
    sendingEmailRecordId?: string;
    /** undefined */
    sendingEmailAttachmentId?: string;
    /** 文件ID列表 */
    attachmentList?: IAttachmentRequestDTO[];
}
/** AttachmentRequestDTO */
export interface IAttachmentRequestDTO {
    /** undefined */
    fileKey: string;
    /** undefined */
    name: string;
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
