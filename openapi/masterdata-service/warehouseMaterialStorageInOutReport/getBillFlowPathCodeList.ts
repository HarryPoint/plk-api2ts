// JSONResult«物料收发单据列表响应对象»
export interface IJSONResultResponseObjectOfTheBillListForReceivingAndSendingMaterials {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IMaterialReceiptAndReceiptListResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 物料收发单据列表响应对象
export interface IMaterialReceiptAndReceiptListResponseObject {
    // 列表单据
    billHeadCode: IMaterialReceiptAndDeliveryDocumentListDocumentResponseObject[];
    // 选择单据
    billSelectCode: IMaterialReceiptAndDeliveryDocumentListDocumentResponseObject[];
}
// 物料收发单据列表单据响应对象
export interface IMaterialReceiptAndDeliveryDocumentListDocumentResponseObject {
    // id
    id: number;
    // code
    code: string;
    // 单据名称
    name: string;
    // 出入库类型
    storageLogType: string;
}
