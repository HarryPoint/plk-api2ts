// ReportTemplateSelectorQueryConditionDTO
export interface IReportTemplateSelectorQueryConditionDTO {
    // 模板名称 - 模糊查询
    templateName: string;
}
// JSONResult«List«ReportTemplateQueryResponseDTO»»
export interface IJSONResultListReportTemplateQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ReportTemplateQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
