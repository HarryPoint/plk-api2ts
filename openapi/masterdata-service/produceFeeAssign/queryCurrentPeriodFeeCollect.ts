// JSONResult«List«费用归集明细响应DTO»»
export interface IJSONResultList费用归集明细响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I费用归集明细响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 费用归集明细响应DTO
export interface I费用归集明细响应DTO {
    // 费用归集明细id
    id: number;
    // 费用类型id
    produceFeeTypeId: number;
    // 费用编码
    produceFeeCode: string;
    // 费用名称
    produceFeeName: string;
    // 费用金额
    fee: number;
    // 所属期间
    periodDate: string;
    // 指定生产订单
    produceOrderId: number;
}
