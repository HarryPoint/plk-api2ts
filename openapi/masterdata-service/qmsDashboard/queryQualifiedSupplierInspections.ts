// JSONResult«List«供应商交检合格率查询响应»»
export interface IJSONResultListResponseToTheSupplierDeliveryQualificationRateQuery {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ISupplierDeliveryQualifiedRateQueryResponse[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 供应商交检合格率查询响应
export interface ISupplierDeliveryQualifiedRateQueryResponse {
    // 月份
    month: string;
    // 合格数量
    qualifiedQuantity: number;
    // 交检总数量
    inspectionQuantity: number;
    // 合格率
    passRate: number;
}
