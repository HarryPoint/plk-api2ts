// 基础质量审核查询请求i
export interface I基础质量审核查询请求i {
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
    data: 问题等级查询响应[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
