import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/进出料批次相关/listCanMoveOutLotOrderUsingPOST
*/
export default function fetchMethod(options: { data: IDtoCanBeQueriedForIncomingAndOutgoingMaterialBatches }, extraOptions?: any) {
    return http<IJSONResultListDeliverableBatchResponseDto>(
        {
            url: "/masterdata-service/moveInOutLotOrder/listCanMoveOutLotOrder",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 可进出料批次查询dto */
export interface IDtoCanBeQueriedForIncomingAndOutgoingMaterialBatches {
    /** 批次号 */
    lotOrderCode?: string;
    /** 生产任务id */
    produceTaskId: string;
}
/** JSONResult«List«可出料批次响应dto»» */
export interface IJSONResultListDeliverableBatchResponseDto {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IReleasableBatchResponseDto[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 可出料批次响应dto */
export interface IReleasableBatchResponseDto {
    /** 可出料数量 */
    canOptQuantity?: number;
    /** 批次id */
    id?: string;
    /** 批次号 */
    lotOrderCode?: string;
}
