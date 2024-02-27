import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产原材料成本同步测试相关/getIssuanceByCodeUsingGET
*/
export default function fetchMethod(options: { params: { code?: string } }, extraOptions?: any) {
    return http<IJSONResultProductionMaterialIssuanceOrderCostFetchBO>(
        {
            url: "/masterdata-service/produceRawMaterialCostSyncTest/getIssuanceByCode",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ProductionMaterialIssuanceOrderCostFetchBO» */
export interface IJSONResultProductionMaterialIssuanceOrderCostFetchBO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionMaterialIssuanceOrderCostFetchBO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProductionMaterialIssuanceOrderCostFetchBO */
export interface IProductionMaterialIssuanceOrderCostFetchBO {
    /** undefined */
    code?: string;
    /** undefined */
    billDate?: number;
    /** undefined */
    detailList?: IProductionMaterialIssuanceOrderCostFetchDetailBO[];
    /** undefined */
    success?: EProductionMaterialIssuanceOrderCostFetchBO_success;
    /** undefined */
    errorInfo?: string;
}
/** ProductionMaterialIssuanceOrderCostFetchDetailBO */
export interface IProductionMaterialIssuanceOrderCostFetchDetailBO {
    /** undefined */
    materialCode?: string;
    /** undefined */
    issuanceQuantity?: number;
    /** undefined */
    unitCost?: number;
    /** undefined */
    totalCost?: number;
}

export enum EProductionMaterialIssuanceOrderCostFetchBO_success {
    Y = "Y",
    N = "N"
}
