import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/费用分配相关/queryCurrentPeriodFeeCollectUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListDetailedResponseDTOForCostCollection>(
        {
            url: "/masterdata-service/produceFeeAssign/queryCurrentPeriodFeeCollect",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«费用归集明细响应DTO»» */
export interface IJSONResultListDetailedResponseDTOForCostCollection {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IExpenseCollectionDetailsRespondToDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 费用归集明细响应DTO */
export interface IExpenseCollectionDetailsRespondToDTO {
    /** 费用归集明细id */
    id?: string;
    /** 费用类型id */
    produceFeeTypeId?: string;
    /** 费用编码 */
    produceFeeCode?: string;
    /** 费用名称 */
    produceFeeName?: string;
    /** 费用金额 */
    fee?: number;
    /** 所属期间 */
    periodDate?: number;
    /** 指定生产订单 */
    produceOrderId?: string;
}
