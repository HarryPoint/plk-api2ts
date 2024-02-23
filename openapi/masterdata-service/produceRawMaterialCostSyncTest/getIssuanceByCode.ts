import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/生产原材料成本同步测试相关/getIssuanceByCodeUsingGET
export default function fetchMethod(params: { code: string }, extraOptions?: any) {
    return http<IJSONResultProductionMaterialIssuanceOrderCostFetchBO>(
        {
            url: "/masterdata-service/produceRawMaterialCostSyncTest/getIssuanceByCode",
            method: "get",
            params,
        },
        extraOptions,
    );
}
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
