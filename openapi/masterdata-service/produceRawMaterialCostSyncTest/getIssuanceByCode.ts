import { http } from "@/api/http";

/**
* @author Mao Hai Ping
* @link http://47.108.135.148:16700/doc.html#/default/生产原材料成本同步测试相关/getIssuanceByCodeUsingGET
*/
export default function fetchMethod(options: { params: { code?: string } }, extraOptions?: any) {
    return http<IJSONResultProductionMaterialIssuanceOrderCostFetchBO>(
        {
            url: "/masterdata-service/produceRawMaterialCostSyncTest/getIssuanceByCode",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ProductionMaterialIssuanceOrderCostFetchBO» */
export interface IJSONResultProductionMaterialIssuanceOrderCostFetchBO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductionMaterialIssuanceOrderCostFetchBO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProductionMaterialIssuanceOrderCostFetchBO */
export interface IProductionMaterialIssuanceOrderCostFetchBO {
    /** undefined */
    billDate?: number;
    /** undefined */
    code?: string;
    /** undefined */
    detailList?: IProductionMaterialIssuanceOrderCostFetchDetailBO[];
    /** undefined */
    errorInfo?: string;
    /** undefined */
    success?: EProductionMaterialIssuanceOrderCostFetchBO_success;
}
/** ProductionMaterialIssuanceOrderCostFetchDetailBO */
export interface IProductionMaterialIssuanceOrderCostFetchDetailBO {
    /** undefined */
    issuanceQuantity?: number;
    /** undefined */
    materialCode?: string;
    /** undefined */
    totalCost?: number;
    /** undefined */
    unitCost?: number;
}

export enum EProductionMaterialIssuanceOrderCostFetchBO_success {
    Y = "Y",
    N = "N"
}
