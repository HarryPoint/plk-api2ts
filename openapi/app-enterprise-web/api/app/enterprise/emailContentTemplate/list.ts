// JSONResult«List«EmailContentTemplateDTO»»
export interface IJSONResultListEmailContentTemplateDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IEmailContentTemplateDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// EmailContentTemplateDTO
export interface IEmailContentTemplateDTO {
    // ID
    id: number;
    // 邮件内容
    content: string;
}
