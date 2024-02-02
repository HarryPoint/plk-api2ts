// JSONResult«质量统计分析报表合计返回DTO»
export interface IJSONResultTotalQualityStatisticalAnalysisReportReturnedToDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 质量统计分析报表合计返回DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
