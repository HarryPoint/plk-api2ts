import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产订单下发/batchRecallIssueUsingPOST
*/
export default function fetchMethod(options: { data: IIdCollectionInformation, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultProductionOrderDeliveryResultDTO>(
        {
            url: "/masterdata-service/produceOrderIssue/recallIssue/batch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** id集合信息 */
export interface IIdCollectionInformation {
    /** id集合 */
    ids?: string[];
}
/** JSONResult«生产订单下发结果DTO» */
export interface IJSONResultProductionOrderDeliveryResultDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductionOrderDeliveryResultsDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产订单下发结果DTO */
export interface IProductionOrderDeliveryResultsDTO {
    /** 失败条数 */
    failedQuantity?: number;
    /** 成功条数 */
    succeedQuantity?: number;
}
