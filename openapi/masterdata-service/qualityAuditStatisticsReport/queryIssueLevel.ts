// 基础质量审核查询请求i
export interface IBasicQualityAuditQueryRequestI {
    // 日期范围-起始
    dateRangeBegin: string;
    // 日期范围-结束
    dateRangeEnd: string;
}
// JSONResult«List«问题等级查询响应»»
export interface IJSONResultList问题等级查询响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I问题等级查询响应[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 问题等级查询响应
export interface I问题等级查询响应 {
    // 问题等级
    issueLevel: string;
    // 问题等级名称
    issueLevelName: string;
    // 不符合项数量
    nonConformanceQuantity: number;
    // 未整改数量
    unRectifiedQuantity: number;
    // 整改率
    rectificationRate: number;
    // 内部审核不符合项数量
    internalAuditNonConformanceQuantity: number;
    // 外部审核不符合项数量
    externalAuditNonConformanceQuantity: number;
    // 专项审核不符合项数量
    specialAuditNonConformanceQuantity: number;
}