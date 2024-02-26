import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产任务相关/getProduceTaskLotListForMobileUsingPOST
*/
export default function fetchMethod(data: IProductionTaskBatchInformationQueryDTOForMobileTerminals, extraOptions?: any) {
    return http<IJSONResultListProductionTaskGroupingBatchOrderResponseDTOForMobile>(
        {
            url: "/masterdata-service/produceTask/getProduceTaskLotListForMobile",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 生产任务批次信息查询DTO(针对移动端) */
export interface IProductionTaskBatchInformationQueryDTOForMobileTerminals {
    /** 任务ids */
    taskIds: number[];
    /** 进出料类型 */
    produceTaskOptType: string;
}
/** JSONResult«List«生产任务分组批次订单响应DTO(针对移动端)»» */
export interface IJSONResultListProductionTaskGroupingBatchOrderResponseDTOForMobile {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IProductionTaskGroupingBatchOrderResponseDTOForMobile[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 生产任务分组批次订单响应DTO(针对移动端) */
export interface IProductionTaskGroupingBatchOrderResponseDTOForMobile {
    /** 任务id */
    taskId: number;
    /** 批次 */
    lotOrders: IProductionTaskGroupBatchDetailResponseDTOForMobileEnd[];
}
/** 生产任务分组批次明细响应DTO(针对移动端) */
export interface IProductionTaskGroupBatchDetailResponseDTOForMobileEnd {
    /** 批次id */
    lotId: number;
    /** 批次号 */
    lotNo: string;
    /** 批次总数量 */
    totalCount: number;
    /** 批次可进料数量 */
    canMoveInQuantity: number;
    /** 批次可出料数量 */
    canMoveOutQuantity: number;
}
