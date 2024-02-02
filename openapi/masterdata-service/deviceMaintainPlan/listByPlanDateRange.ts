// 计划开始结束日期查询DTO
export interface I计划开始结束日期查询DTO {
    // planId
    planId: number;
    // 计划开始日期
    planStartDate: string;
    // 计划结束日期
    planEndDate: string;
}
// JSONResult«List«保养计划响应DTO»»
export interface IJSONResultList保养计划响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 保养计划响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
