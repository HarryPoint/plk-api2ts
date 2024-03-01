import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/生产任务相关/getProduceTaskLotListForMobileUsingPOST
*/
export default function fetchMethod(options: { data: IProductionTaskBatchInformationQueryDTOForMobileTerminals }, extraOptions?: any) {
    return http<IJSONResultListProductionTaskGroupingBatchOrderResponseDTOForMobile>(
        {
            url: "/masterdata-service/produceTask/getProduceTaskLotListForMobile",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务批次信息查询DTO(针对移动端) */
export interface IProductionTaskBatchInformationQueryDTOForMobileTerminals {
    /** 进出料类型 */
    produceTaskOptType?: EProductionTaskBatchInformationQueryDTOForMobileTerminals_produceTaskOptType;
    /** 任务ids */
    taskIds?: string[];
}
/** JSONResult«List«生产任务分组批次订单响应DTO(针对移动端)»» */
export interface IJSONResultListProductionTaskGroupingBatchOrderResponseDTOForMobile {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductionTaskGroupingBatchOrderResponseDTOForMobile[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产任务分组批次订单响应DTO(针对移动端) */
export interface IProductionTaskGroupingBatchOrderResponseDTOForMobile {
    /** 批次 */
    lotOrders?: IProductionTaskGroupBatchDetailResponseDTOForMobileEnd[];
    /** 任务id */
    taskId?: string;
}
/** 生产任务分组批次明细响应DTO(针对移动端) */
export interface IProductionTaskGroupBatchDetailResponseDTOForMobileEnd {
    /** 批次可进料数量 */
    canMoveInQuantity?: number;
    /** 批次可出料数量 */
    canMoveOutQuantity?: number;
    /** 批次id */
    lotId?: string;
    /** 批次号 */
    lotNo?: string;
    /** 批次总数量 */
    totalCount?: number;
}

export enum EProductionTaskBatchInformationQueryDTOForMobileTerminals_produceTaskOptType {
    /** 可进料 */
    CAN_IN = "CAN_IN",
    /** 可出料 */
    CAN_OUT = "CAN_OUT"
}
