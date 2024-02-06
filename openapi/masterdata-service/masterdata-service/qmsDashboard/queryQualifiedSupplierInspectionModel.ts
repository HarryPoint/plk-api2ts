// QualifiedSupplierInspectionModelQueryRequestDTO
export interface IQualifiedSupplierInspectionModelQueryRequestDTO {
    // 查询日期的开始
    dateRangeBegin: string;
    // 查询日期的结束
    dateRangeEnd: string;
}
// JSONResult«List«供应商交检合格率-型号查询响应»»
export interface IJSONResultListResponseToTheSupplier'sQualifiedDeliveryRate {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ISupplierDeliveryQualifiedRateModelQueryResponse[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
// 供应商交检合格率-型号查询响应
export interface ISupplierDeliveryQualifiedRateModelQueryResponse {
    // 型号
    modelName: string;
    // 合格数量
    qualifiedQuantity: number;
    // 不合格数量
    unqualifiedQuantity: number;
}

}
