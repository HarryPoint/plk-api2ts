// 批次订单Wip搜索VO
export interface I批次订单Wip搜索VO {
    // 批次id集
    lotOrderIds: number[];
    // 批次操作类型
    lotOpType: string;
}
// JSONResult«List«批次Wip信息返回VO»»
export interface IJSONResultList批次Wip信息返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 批次Wip信息返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
