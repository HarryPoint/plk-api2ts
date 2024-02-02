// ReportTemplateEditRequestDTO
export interface IReportTemplateEditRequestDTO {
    // ID
    id: number;
    // 模板名称
    templateName: string;
    // 报表类型
    report: string;
    // 导出参数
    exportParam;
    // 开始时间字段编码
    beginTimeFieldCode: string;
    // 结束时间字段编码
    endTimeFieldCode: string;
    // 显示模板条件添加请求列表
    showFilterConditionList: ReportTemplateConditionEditRequestDTO[];
    // 报表统计时间范围添加请求
    timeRange: ReportStatisticsTimeRangeEditRequestDTO;
}
// JSONResult«string»_1
export interface IJSONResultstring_1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
