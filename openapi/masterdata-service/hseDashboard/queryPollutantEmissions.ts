// 污染物查询请求
export interface I污染物查询请求 {
    // 查询日期的开始
    dateRangeBegin: string;
    // 查询日期的结束
    dateRangeEnd: string;
}
// JSONResult«List«污染物查询响应»»
export interface IJSONResultList污染物查询响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I污染物查询响应[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 污染物查询响应
export interface I污染物查询响应 {
    // 污染物排放类别
    pollutantEmissionCategory: string;
    // 数量
    quantity: number;
}
