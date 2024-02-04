// 危险点查询请求
export interface I危险点查询请求 {
    // 查询日期的开始
    dateRangeBegin: string;
    // 查询日期的结束
    dateRangeEnd: string;
}
// JSONResult«List«危险点查询响应»»
export interface IJSONResultList危险点查询响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I危险点查询响应[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 危险点查询响应
export interface I危险点查询响应 {
    // 危险点等级Key
    dangerPointLevelKey: string;
    // 危险点等级名称
    dangerPointLevelName: string;
    // 危险点数量
    dangerPointQuantity: number;
}
