// 基础质量审核查询请求i
export interface I基础质量审核查询请求i {
    // 日期范围-起始
    dateRangeBegin: string;
    // 日期范围-结束
    dateRangeEnd: string;
}
// JSONResult«不符合项统计-条款号»
export interface IJSONResult不符合项统计条款号 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I不符合项统计条款号;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 不符合项统计-条款号
export interface I不符合项统计条款号 {
    // 各部门不符合项分布情况的标题
    titleList: I审核类型标题[];
    // 条款项列表
    itemList: IQualityAuditClauseNumberQueryItemResponseDTO[];
}
// 审核类型标题
export interface I审核类型标题 {
    // 标题的Key
    key: string;
    // 标题的名称
    name: string;
}
// QualityAuditClauseNumberQueryItemResponseDTO
export interface IQualityAuditClauseNumberQueryItemResponseDTO {
    // 条款号ID
    clauseNumberId: number;
    // 条款号
    clauseNumber: string;
    // 不符合项数量
    nonConformanceQuantity: number;
    // 未整改数量
    unRectifiedQuantity: number;
    // 整改率
    rectificationRate: number;
    // 各部门不符合项分布情况
    dynamicIndicates;
}
