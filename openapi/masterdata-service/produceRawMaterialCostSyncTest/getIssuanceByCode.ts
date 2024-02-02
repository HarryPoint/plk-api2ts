// JSONResult«ProductionMaterialIssuanceOrderCostFetchBO»
export interface IJSONResultProductionMaterialIssuanceOrderCostFetchBO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionMaterialIssuanceOrderCostFetchBO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ProductionMaterialIssuanceOrderCostFetchBO
export interface IProductionMaterialIssuanceOrderCostFetchBO {
    // undefined
    code: string;
    // undefined
    billDate: string;
    // undefined
    detailList: IProductionMaterialIssuanceOrderCostFetchDetailBO[];
    // undefined
    success: string;
    // undefined
    errorInfo: string;
}
// ProductionMaterialIssuanceOrderCostFetchDetailBO
export interface IProductionMaterialIssuanceOrderCostFetchDetailBO {
    // undefined
    materialCode: string;
    // undefined
    issuanceQuantity: number;
    // undefined
    unitCost: number;
    // undefined
    totalCost: number;
}
