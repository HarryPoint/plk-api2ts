import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/仓库盘点任务相关/getListForStaffUsingPOST_3
*/
export default function fetchMethod(options: { data: IPublicBacklogDataQuery, params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultListStorageTakeCheckTaskResponseDTO>(
        {
            url: "/masterdata-service/storageTakeCheckTask/getListForStaff",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 公共待办数据查询 */
export interface IPublicBacklogDataQuery {
    /** 编码 */
    code?: string;
    /** 创建时间--开始时间 */
    createBeginTime?: string;
    /** 创建时间--结束时间 */
    createEndTime?: string;
    /** 工序id集合 */
    processIds?: string[];
    /** 生产任务状态集合 */
    produceTaskStatusList?: EPublicBacklogDataQuery_produceTaskStatusList_items[];
    /** 是否超时(生产任务) */
    isTimeout?: EPublicBacklogDataQuery_isTimeout;
    /** 质检任务状态集合 */
    qualityProduceTaskStatusList?: EPublicBacklogDataQuery_qualityProduceTaskStatusList_items[];
    /** 生产任务可操作类型 */
    optTypes?: EPublicBacklogDataQuery_optTypes_items[];
}
/** JSONResult«List«StorageTakeCheckTaskResponseDTO»» */
export interface IJSONResultListStorageTakeCheckTaskResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IStorageTakeCheckTaskResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** StorageTakeCheckTaskResponseDTO */
export interface IStorageTakeCheckTaskResponseDTO {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 盘点仓库id */
    storehouseId?: string;
    /** 盘点范围 */
    scopeType?: EStorageTakeCheckTaskResponseDTO_scopeType;
    /** 任务号 */
    taskNo?: string;
    /** 处理人id */
    handleUserId?: string;
    /** 计划开始时间 */
    planBeginTime?: number;
    /** 完成时间 */
    completeTime?: number;
    /** 状态 */
    status?: EStorageTakeCheckTaskResponseDTO_status;
}

export enum EPublicBacklogDataQuery_produceTaskStatusList_items {
    WAIT = "WAIT",
    PRODUCE = "PRODUCE",
    PAUSE = "PAUSE",
    STOP = "STOP",
    CLOSE = "CLOSE",
    CANCEL = "CANCEL"
}

export enum EPublicBacklogDataQuery_isTimeout {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPublicBacklogDataQuery_qualityProduceTaskStatusList_items {
    WAIT = "WAIT",
    COMPLETE = "COMPLETE",
    CANCEL = "CANCEL",
    CLOSE = "CLOSE"
}

export enum EPublicBacklogDataQuery_optTypes_items {
    CAN_MOVE_IN = "CAN_MOVE_IN",
    CAN_QUALITY = "CAN_QUALITY",
    CAN_MOVE_OUT = "CAN_MOVE_OUT"
}

export enum EStorageTakeCheckTaskResponseDTO_scopeType {
    /** 指定仓位 */
    APPOINT = "APPOINT",
    /** 物料类型 */
    MATERIAL_TYPE = "MATERIAL_TYPE",
    /** 全部物料 */
    ALL = "ALL"
}

export enum EStorageTakeCheckTaskResponseDTO_status {
    /** 待盘点 */
    WAIT = "WAIT",
    /** 盘点中 */
    HANDLING = "HANDLING",
    /** 待核对 */
    WAIT_VERIFY = "WAIT_VERIFY",
    /** 待盈亏处理 */
    WAIT_EXAMINE = "WAIT_EXAMINE",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}
