import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/进出料模具相关/setMoveInMoldBatchUsingPOST
*/
export default function fetchMethod(options: { data: IProductionTaskBatchSetFeedMoldRequestDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/moveInOutMold/setMoveInMoldBatch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产任务批量设置进料模具请求DTO */
export interface IProductionTaskBatchSetFeedMoldRequestDTO {
    /** 模具ids */
    moldIds: string[];
    /** 工序id */
    processId?: string;
    /** 生产任务详情 */
    produceTaskDetails?: IProductionTaskBatchSetFeedMoldTaskDetailsRequestDTO[];
}
/** 生产任务批量设置进料模具任务详情请求DTO */
export interface IProductionTaskBatchSetFeedMoldTaskDetailsRequestDTO {
    /** 批次ids */
    lotIds: string[];
    /** 生产任务id */
    produceTaskId: string;
    /** undefined */
    produceTechnologyMoldIds?: string[];
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
