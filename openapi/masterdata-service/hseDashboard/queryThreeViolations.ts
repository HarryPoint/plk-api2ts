// 三维信息查询请求
export interface I三维信息查询请求 {
    // 查询日期的开始
    dateRangeBegin: string;
    // 查询日期的结束
    dateRangeEnd: string;
}
// JSONResult«List«三维信息查询响应»»
export interface IJSONResultList三维信息查询响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I三维信息查询响应[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 三维信息查询响应
export interface I三维信息查询响应 {
    // 违规Key
    violationKey: string;
    // 违规名称
    violationName: string;
    // 整改完成数量
    rectificationQuantity: number;
    // 违规数量
    violationQuantity: number;
    // 整改完成率 = 整改完成数量 / 违规数量
    rectificationCompletionRare: number;
}
