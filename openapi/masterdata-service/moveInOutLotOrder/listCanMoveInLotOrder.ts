import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/进出料批次相关/listCanMoveInLotOrderUsingPOST
*/
export default function fetchMethod(options: { data: IDtoCanBeQueriedForIncomingAndOutgoingMaterialBatches }, extraOptions?: any) {
    return http<ITheJSONResultListRespondsToTheDtoForIncomingBatches>(
        {
            url: "/masterdata-service/moveInOutLotOrder/listCanMoveInLotOrder",
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
/** JSONResult«List«可进料批次响应dto»» */
export interface ITheJSONResultListRespondsToTheDtoForIncomingBatches {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ICanRespondToDtoWithIncomingBatch[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 可进料批次响应dto */
export interface ICanRespondToDtoWithIncomingBatch {
    /** 可进料数量 */
    canOptQuantity?: number;
    /** 批次id */
    id?: string;
    /** 批次号 */
    lotOrderCode?: string;
    /** 需进料数量 */
    needOptQuantity?: number;
    /** 来料时间 */
    wmRpCreateTime?: number;
}
