// http://47.108.139.107:16700/doc.html#/default/生产订单下发/batchIssueUsingPOST
// id集合信息
export interface IIdCollectionInformation {
    // id集合
    ids: number[];
}
// JSONResult«生产订单下发结果DTO»
export interface IJSONResultProductionOrderDeliveryResultDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionOrderDeliveryResultsDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产订单下发结果DTO
export interface IProductionOrderDeliveryResultsDTO {
    // 成功条数
    succeedQuantity: number;
    // 失败条数
    failedQuantity: number;
}
