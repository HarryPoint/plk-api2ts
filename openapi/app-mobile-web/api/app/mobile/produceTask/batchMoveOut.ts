import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:17400/doc.html#/default/生产任务相关/batchMoveOutUsingPOST
*/
export default function fetchMethod(options: { data: ITaskBatchOperationDTO4 }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-mobile-web/api/app/mobile/produceTask/batchMoveOut",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 任务批量操作DTO_4 */
export interface ITaskBatchOperationDTO4 {
    /** 工序id */
    processId?: string;
    /** 生产任务列表 */
    produceTaskList: ITaskBatchOperationDTO3[];
    /** 是否使用进出料信息，来作为实际出料的唯一依据 */
    isUseMaterialMoveInOrOutInfo?: ETaskBatchOperationDTO4_isUseMaterialMoveInOrOutInfo;
    /** undefined */
    handleOtherAsync?: ETaskBatchOperationDTO4_handleOtherAsync;
}
/** 任务批量操作DTO_3 */
export interface ITaskBatchOperationDTO3 {
    /** 生产任务id */
    taskId: string;
    /** 实际数量 */
    actualQuantity?: number;
    /** 批次订单id集 */
    lotOrders?: ITaskBatchOperationDTO2[];
}
/** 任务批量操作DTO_2 */
export interface ITaskBatchOperationDTO2 {
    /** 批次id */
    lotId?: string;
    /** 实际数量 */
    actualQuantity?: number;
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

export enum ETaskBatchOperationDTO4_isUseMaterialMoveInOrOutInfo {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETaskBatchOperationDTO4_handleOtherAsync {
    Y = "Y",
    N = "N"
}
