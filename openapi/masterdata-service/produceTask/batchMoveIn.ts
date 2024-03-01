import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产任务相关/batchMoveInUsingPOST
*/
export default function fetchMethod(options: { data: ITaskBatchOperationDTO4, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/produceTask/batchMoveIn",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 任务批量操作DTO_4 */
export interface ITaskBatchOperationDTO4 {
    /** undefined */
    handleOtherAsync?: ETaskBatchOperationDTO4_handleOtherAsync;
    /** 是否使用进出料信息，来作为实际出料的唯一依据 */
    isUseMaterialMoveInOrOutInfo?: ETaskBatchOperationDTO4_isUseMaterialMoveInOrOutInfo;
    /** 工序id */
    processId?: string;
    /** 生产任务列表 */
    produceTaskList: ITaskBatchOperationDTO3[];
}
/** 任务批量操作DTO_3 */
export interface ITaskBatchOperationDTO3 {
    /** 实际数量 */
    actualQuantity?: number;
    /** 批次订单id集 */
    lotOrders?: ITaskBatchOperationDTO2[];
    /** 生产任务id */
    taskId: string;
}
/** 任务批量操作DTO_2 */
export interface ITaskBatchOperationDTO2 {
    /** 实际数量 */
    actualQuantity?: number;
    /** 批次id */
    lotId?: string;
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

export enum ETaskBatchOperationDTO4_handleOtherAsync {
    Y = "Y",
    N = "N"
}

export enum ETaskBatchOperationDTO4_isUseMaterialMoveInOrOutInfo {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
