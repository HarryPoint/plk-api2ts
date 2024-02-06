// 工序关联字段查询请求对象
export interface IProcedureAssociatedFieldQueryRequestObject {
    // 生产订单id
    produceOrderId: number;
    // 工序ID
    processId: number;
    // 销售订单id
    salesOrderId: number;
}
// JSONResult«List«工序对应字段详情VO»»
export interface ITheJSONResultListOperationCorrespondsToTheFieldDetailsVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IOperationsCorrespondToFieldDetailsVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工序对应字段详情VO
export interface IOperationsCorrespondToFieldDetailsVO {
    // 关联字段code
    fieldCode: string;
    // 关联字段名称
    fieldName: string;
    // 值
    value: any;
}
