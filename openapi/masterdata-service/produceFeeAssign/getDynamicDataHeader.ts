// JSONResult«List«生产成本分配动态表头响应对象»»
export interface IJSONResultList生产成本分配动态表头响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产成本分配动态表头响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产成本分配动态表头响应对象
export interface I生产成本分配动态表头响应对象 {
    // 费用类型id
    produceFeeTypeId: number;
    // 费用类型code
    produceFeeTypeCode: string;
    // 费用类型name
    produceFeeTypeName: string;
}
