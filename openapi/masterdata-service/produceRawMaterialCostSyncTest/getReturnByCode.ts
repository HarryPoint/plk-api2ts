import { http } from "@/api/http";

/**
* @author Mao Hai Ping
* @link http://47.108.139.107:16700/doc.html#/default/生产原材料成本同步测试相关/getReturnByCodeUsingGET
*/
export default function fetchMethod(options: { params: { code?: string } }, extraOptions?: any) {
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionMaterialReturnOrderCostFetchBO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProductionMaterialReturnOrderCostFetchBO */
export interface IProductionMaterialReturnOrderCostFetchBO {
    /** undefined */
    code?: string;
    /** undefined */
    billDate?: number;
    /** undefined */
    detailList?: IProductionMaterialReturnOrderCostFetchDetailBO[];
    /** undefined */
    success?: EProductionMaterialReturnOrderCostFetchBO_success;
    /** undefined */
    errorInfo?: string;
}
/** ProductionMaterialReturnOrderCostFetchDetailBO */
export interface IProductionMaterialReturnOrderCostFetchDetailBO {
    /** undefined */
    materialCode?: string;
    /** undefined */
    materialReturnQuantity?: number;
    /** undefined */
    unitCost?: number;
    /** undefined */
    totalCost?: number;
}

export enum EProductionMaterialReturnOrderCostFetchBO_success {
    Y = "Y",
    N = "N"
}
