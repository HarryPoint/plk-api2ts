// JSONResult«List«质量工作计划完成率返回DTO»»
export interface IJSONResultListQualityWorkPlanCompletionRateReturnToDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IQualityWorkPlanCompletionRateReturnedToDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质量工作计划完成率返回DTO
export interface IQualityWorkPlanCompletionRateReturnedToDTO {
    // 责任部门
    departmentName: string;
    // 完成率
    completionRate: number;
}
