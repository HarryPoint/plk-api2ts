// 批次订单校验能否合并搜索VO
export interface I批次订单校验能否合并搜索VO {
    // 批次id集
    lotOrderIds: number[];
}
// JSONResult«是否信息»
export interface IJSONResult是否信息 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I是否信息;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 是否信息
export interface I是否信息 {
    // 是否
    whether: string;
}
