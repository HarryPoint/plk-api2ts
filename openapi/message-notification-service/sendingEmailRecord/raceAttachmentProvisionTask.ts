// RaceAttachmentProvisionTaskRequestDTO
export interface IRaceAttachmentProvisionTaskRequestDTO {
    // undefined
    fileTypeList: string[];
}
// JSONResult«RaceAttachmentProvisionTaskResponseDTO»
export interface IJSONResultRaceAttachmentProvisionTaskResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IRaceAttachmentProvisionTaskResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// RaceAttachmentProvisionTaskResponseDTO
export interface IRaceAttachmentProvisionTaskResponseDTO {
    // undefined
    emailTaskId: number;
    // undefined
    sendingEmailRecordId: number;
    // undefined
    sendingEmailAttachmentId: number;
    // undefined
    refId: number;
    // undefined
    fileType: string;
}
