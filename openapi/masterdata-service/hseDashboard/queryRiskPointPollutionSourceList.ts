// 风险点污染源查询请求
export interface I风险点污染源查询请求 {
    // 查询日期的开始
    dateRangeBegin: string;
    // 查询日期的结束
    dateRangeEnd: string;
}
// JSONResult«List«风险点污染源查询响应»»
export interface IJSONResultList风险点污染源查询响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I风险点污染源查询响应[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 风险点污染源查询响应
export interface I风险点污染源查询响应 {
    // ID
    id: number;
    // 年份
    year: string;
    // 风险点数量
    riskPointQuantity: number;
    // 污染源数量
    pollutionSourceQuantity: number;
}
