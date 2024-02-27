import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/进出料设备相关/setMoveInDeviceBatchUsingPOST
*/
export default function fetchMethod(options: { data: IProductionTaskBatchSetTheFeedDeviceRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/moveInOutDevice/setMoveInDeviceBatch",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务批量设置进料设备请求DTO */
export interface IProductionTaskBatchSetTheFeedDeviceRequestDTO {
    /** 工序id */
    processId?: string;
    /** 生产任务详情 */
    produceTaskDetails?: IProductionTaskBatchSetFeedDeviceTaskDetailsRequestDTO[];
    /** 设备ids */
    deviceIds: string[];
}
/** 生产任务批量设置进料设备任务详情请求DTO */
export interface IProductionTaskBatchSetFeedDeviceTaskDetailsRequestDTO {
    /** 生产任务id */
    produceTaskId: string;
    /** 批次ids */
    lotIds: string[];
    /** undefined */
    produceTechnologyDeviceIds?: string[];
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
