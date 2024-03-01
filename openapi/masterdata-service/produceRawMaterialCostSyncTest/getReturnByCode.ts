import { http } from "@/api/http";

/**
* @author Mao Hai Ping
* @link http://47.108.135.148:16700/doc.html#/default/生产原材料成本同步测试相关/getReturnByCodeUsingGET
*/
export default function fetchMethod(options: { params: { Code?: string } }, extraOptions?: any) {
    return http<IJSONResultProductionMaterialReturnOrderCostFetchBO>(
        {
            url: "/masterdata-service/produceRawMaterialCostSyncTest/getReturnByCode",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ProductionMaterialReturnOrderCostFetchBO» */
export interface IJSONResultProductionMaterialReturnOrderCostFetchBO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductionMaterialReturnOrderCostFetchBO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProductionMaterialReturnOrderCostFetchBO */
export interface IProductionMaterialReturnOrderCostFetchBO {
    /** undefined */
    billDate?: number;
    /** undefined */
    code?: string;
    /** undefined */
    detailList?: IProductionMaterialReturnOrderCostFetchDetailBO[];
    /** undefined */
    errorInfo?: string;
    /** undefined */
    success?: EProductionMaterialReturnOrderCostFetchBO_success;
}
/** ProductionMaterialReturnOrderCostFetchDetailBO */
export interface IProductionMaterialReturnOrderCostFetchDetailBO {
    /** undefined */
    materialCode?: string;
    /** undefined */
    materialReturnQuantity?: number;
    /** undefined */
    totalCost?: number;
    /** undefined */
    unitCost?: number;
}

export enum EProductionMaterialReturnOrderCostFetchBO_success {
    Y = "Y",
    N = "N"
}
