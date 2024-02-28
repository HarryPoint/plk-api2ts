import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:17600/doc.html#/default/邮件任务/startTaskUsingPOST
*/
export default function fetchMethod(options: { data: IEmailTaskStartTaskRequestDTO }, extraOptions?: any) {
    return http<IJSONResultEmailTaskStartTaskResponseDTO>(
        {
            url: "/message-notification-service/emailTask/startTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** EmailTaskStartTaskRequestDTO */
export interface IEmailTaskStartTaskRequestDTO {
    /** undefined */
    emailTaskId: string;
}
/** JSONResult«EmailTaskStartTaskResponseDTO» */
export interface IJSONResultEmailTaskStartTaskResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEmailTaskStartTaskResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** EmailTaskStartTaskResponseDTO */
export interface IEmailTaskStartTaskResponseDTO {
    /** 是否启动成功 */
    startSuccess?: boolean;
    /** 邮件任务ID */
    emailTaskId?: string;
    /** 邮件记录ID */
    mailRecordId?: string;
}
