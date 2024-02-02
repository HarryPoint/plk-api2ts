// 基础质量审核查询请求i_1
export interface I基础质量审核查询请求i_1 {
    // 日期范围-起始
    dateRangeBegin: string;
    // 日期范围-结束
    dateRangeEnd: string;
}
// JSONResult«质量审核类型查询响应»
export interface IJSONResult质量审核类型查询响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 质量审核类型查询响应;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
