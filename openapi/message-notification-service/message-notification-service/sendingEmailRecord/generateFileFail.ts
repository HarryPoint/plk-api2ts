// GenerateFileFailRequestDTO
export interface IGenerateFileFailRequestDTO {
    // 邮件记录ID
    mailRecordId: number;
    // 错误原因
    failureReason: string;
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