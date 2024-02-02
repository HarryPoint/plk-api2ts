// JSONResult«List«费用归集明细响应DTO»»
export interface IJSONResultList费用归集明细响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 费用归集明细响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
