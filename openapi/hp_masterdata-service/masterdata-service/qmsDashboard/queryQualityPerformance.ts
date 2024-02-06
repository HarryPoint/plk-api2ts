// JSONResult«List«质量绩效评价表返回DTO»»
export interface IJSONResultListReturnTheQualityPerformanceEvaluationTableToTheDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IQualityPerformanceEvaluationFormReturnedToDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质量绩效评价表返回DTO
export interface IQualityPerformanceEvaluationFormReturnedToDTO {
    // 得分
    score: number;
    // 部门
    departmentName: string;
}
