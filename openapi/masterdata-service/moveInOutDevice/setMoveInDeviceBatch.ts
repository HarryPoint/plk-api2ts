import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/进出料设备相关/setMoveInDeviceBatchUsingPOST
*/
export default function fetchMethod(options: { data: IProductionTaskBatchSetTheFeedDeviceRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/moveInOutDevice/setMoveInDeviceBatch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务批量设置进料设备请求DTO */
export interface IProductionTaskBatchSetTheFeedDeviceRequestDTO {
    /** 设备ids */
    deviceIds: string[];
    /** 工序id */
    processId?: string;
    /** 生产任务详情 */
    produceTaskDetails?: IProductionTaskBatchSetFeedDeviceTaskDetailsRequestDTO[];
}
/** 生产任务批量设置进料设备任务详情请求DTO */
export interface IProductionTaskBatchSetFeedDeviceTaskDetailsRequestDTO {
    /** 批次ids */
    lotIds: string[];
    /** 生产任务id */
    produceTaskId: string;
    /** undefined */
    produceTechnologyDeviceIds?: string[];
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
