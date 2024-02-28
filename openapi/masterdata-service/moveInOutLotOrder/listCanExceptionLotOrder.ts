import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/进出料批次相关/listCanExceptionLotOrderUsingPOST
*/
export default function fetchMethod(options: { data: IDtoCanBeQueriedForIncomingAndOutgoingMaterialBatches }, extraOptions?: any) {
    return http<IJSONResultListHandlesBatchResponseDtosAbnormally>(
        {
            url: "/masterdata-service/moveInOutLotOrder/listCanExceptionLotOrder",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 可进出料批次查询dto */
export interface IDtoCanBeQueriedForIncomingAndOutgoingMaterialBatches {
    /** 生产任务id */
    produceTaskId: string;
    /** 批次号 */
    lotOrderCode?: string;
}
/** JSONResult«List«可异常处理批次响应dto»» */
export interface IJSONResultListHandlesBatchResponseDtosAbnormally {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IBatchResponseDtosCanBeHandledAbnormally[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 可异常处理批次响应dto */
export interface IBatchResponseDtosCanBeHandledAbnormally {
    /** 批次id */
    id?: string;
    /** 批次号 */
    lotOrderCode?: string;
    /** 可异常处理数量 */
    canOptQuantity?: number;
}
