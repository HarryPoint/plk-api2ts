import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:17600/doc.html#/default/邮件任务/raceAttachmentProvisionTaskUsingPOST
*/
export default function fetchMethod(options: { data: IRaceAttachmentProvisionTaskRequestDTO }, extraOptions?: any) {
    return http<IJSONResultRaceAttachmentProvisionTaskResponseDTO>(
        {
            url: "/message-notification-service/sendingEmailRecord/raceAttachmentProvisionTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** RaceAttachmentProvisionTaskRequestDTO */
export interface IRaceAttachmentProvisionTaskRequestDTO {
    /** undefined */
    fileTypeList?: string[];
}
/** JSONResult«RaceAttachmentProvisionTaskResponseDTO» */
export interface IJSONResultRaceAttachmentProvisionTaskResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IRaceAttachmentProvisionTaskResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** RaceAttachmentProvisionTaskResponseDTO */
export interface IRaceAttachmentProvisionTaskResponseDTO {
    /** undefined */
    emailTaskId?: string;
    /** undefined */
    sendingEmailRecordId?: string;
    /** undefined */
    sendingEmailAttachmentId?: string;
    /** undefined */
    refId?: string;
    /** undefined */
    fileType?: string;
}
