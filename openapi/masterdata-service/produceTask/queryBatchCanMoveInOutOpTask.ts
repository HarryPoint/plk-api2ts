import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产任务相关/queryBatchCanMoveInOutOpTaskUsingPOST
*/
export default function fetchMethod(options: { data: ITaskBatchOperationDTO1, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultIndicatesTheDTOReturnedFromABatchOperationTask>(
        {
            url: "/masterdata-service/produceTask/queryBatchCanMoveInOutOpTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 任务批量操作DTO_1 */
export interface ITaskBatchOperationDTO1 {
    /** 工序id */
    processId: string;
    /** 生产任务查询列表 */
    produceTaskDetails: ITaskBatchOperationDtos[];
    /** 查询类型 */
    queryType: ETaskBatchOperationDTO1_queryType;
}
/** 任务批量操作DTO */
export interface ITaskBatchOperationDtos {
    /** 批次订单id集 */
    lotIds?: string[];
    /** 生产任务id */
    produceTaskId: string;
}
/** JSONResult«批量操作任务返回信息DTO» */
export interface IJSONResultIndicatesTheDTOReturnedFromABatchOperationTask {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBatchOperationTaskReturnInformationDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 批量操作任务返回信息DTO */
export interface IBatchOperationTaskReturnInformationDTO {
    /** 区域编码 */
    areaCode?: string;
    /** 区域id */
    areaId?: string;
    /** 区域名称 */
    areaName?: string;
    /** 可进料数/可出料数 */
    canOptQuantity?: number;
    /** 物料数据 */
    materials?: IBatchOperationTaskMaterialResponseDTO[];
    /** 工序编号 */
    processCode?: string;
    /** 工序id */
    processId?: string;
    /** 工序名称 */
    processName?: string;
    /** 操作任务id集 */
    taskIds?: string[];
    /** 需进料数/需出料数 */
    waitQuantity?: number;
}
/** 批量操作任务物料响应DTO */
export interface IBatchOperationTaskMaterialResponseDTO {
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 生产任务列表 */
    produceTaskList?: IBatchOpTaskMoveInOutResponseDTO[];
    /** 进料/出料数量 */
    quantity?: number;
}
/** BatchOpTaskMoveInOutResponseDTO */
export interface IBatchOpTaskMoveInOutResponseDTO {
    /** 进出站方式 */
    inOutType?: EBatchOpTaskMoveInOutResponseDTO_inOutType;
    /** 批次订单列表 */
    lotOrders?: IBatchOperationTaskBatchOrderResponseDTO[];
    /** undefined */
    materialId?: string;
    /** 需生产数量 */
    needProduceQuantity?: number;
    /** 生产任务ID */
    produceTaskId?: string;
    /** 生产任务编码 */
    produceTaskNo?: string;
    /** 进料/出料数量(可用数量) */
    quantity?: number;
}
/** 批量操作任务批次订单响应DTO */
export interface IBatchOperationTaskBatchOrderResponseDTO {
    /** 可进料数/可出料数 */
    canOptQuantity?: number;
    /** 批次id */
    lotId?: string;
    /** 批次号 */
    lotNo?: string;
    /** 需进料数/需出料数 */
    waitQuantity?: number;
}

export enum ETaskBatchOperationDTO1_queryType {
    /** 进料 */
    MOVE_IN = "MOVE_IN",
    /** 出料 */
    MOVE_OUT = "MOVE_OUT",
    /** 设备 */
    DEVICE = "DEVICE",
    /** 模具 */
    MOLD = "MOLD"
}

export enum EBatchOpTaskMoveInOutResponseDTO_inOutType {
    /** 部分进出 */
    PART = "PART",
    /** 整进整出 */
    ALL = "ALL"
}
