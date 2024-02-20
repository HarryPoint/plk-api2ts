// EmailTaskStartTaskRequestDTO
export interface IEmailTaskStartTaskRequestDTO {
    // undefined
    emailTaskId: number;
}
// JSONResult«EmailTaskStartTaskResponseDTO»
export interface IJSONResultEmailTaskStartTaskResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IEmailTaskStartTaskResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// EmailTaskStartTaskResponseDTO
export interface IEmailTaskStartTaskResponseDTO {
    // 是否启动成功
    startSuccess: boolean;
    // 邮件任务ID
    emailTaskId: number;
    // 邮件记录ID
    mailRecordId: number;
}
