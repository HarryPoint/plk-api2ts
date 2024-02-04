// 基础质量审核查询请求i
export interface IBasicQualityAuditQueryRequestI {
    // 日期范围-起始
    dateRangeBegin: string;
    // 日期范围-结束
    dateRangeEnd: string;
}
// JSONResult«改进项统计查询响应»
export interface IJSONResult改进项统计查询响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I改进项统计查询响应;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 改进项统计查询响应
export interface I改进项统计查询响应 {
    // 改进项数量
    improvementItemsQuantity: number;
    // 未整改数量
    unRectifiedQuantity: number;
    // 整改率
    rectificationRate: number;
    // 部门指标 - XX部门该井数量、XX部门未整改数量、XX部门整改率标题
    departmentIndicates: I部门级别的指标[];
}
// 部门级别的指标
export interface I部门级别的指标 {
    // 部门ID
    departmentId: number;
    // 部门名称
    departmentName: string;
    // 改进项数量
    improvementItemsQuantity: number;
    // 未整改数量
    unRectifiedQuantity: number;
    // 整改率
    rectificationRate: number;
}
