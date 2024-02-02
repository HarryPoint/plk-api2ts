// JSONResult«List«工序字段对应表详情VO»»
export interface IJSONResultList工序字段对应表详情VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 工序字段对应表详情VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
