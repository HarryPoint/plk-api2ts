// 职业危害场所查询请求
export interface I职业危害场所查询请求 {
    // 查询日期的开始
    dateRangeBegin: string;
    // 查询日期的结束
    dateRangeEnd: string;
}
// JSONResult«职业危害场所查询响应»
export interface IJSONResult职业危害场所查询响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I职业危害场所查询响应;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 职业危害场所查询响应
export interface I职业危害场所查询响应 {
    // 职业危害场所数量/流程状态未已完成的总数
    hazardLocationQuantity: number;
    // 职业危害因素数量
    hazardFactorsQuantity: number;
    // 超标的数量
    exceededQuantity: number;
    // 未超标的数量
    withinQuantity: number;
}
