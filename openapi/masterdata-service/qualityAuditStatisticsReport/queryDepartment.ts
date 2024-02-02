// 基础质量审核查询请求i
export interface I基础质量审核查询请求i {
    // 日期范围-起始
    dateRangeBegin: string;
    // 日期范围-结束
    dateRangeEnd: string;
}
// JSONResult«不符合项统计-部门»
export interface IJSONResult不符合项统计部门 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 不符合项统计-部门;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
