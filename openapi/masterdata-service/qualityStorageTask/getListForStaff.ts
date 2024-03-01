import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/质检管理/getListForStaffUsingPOST_2
*/
export default function fetchMethod(options: { data: IPublicBacklogDataQuery, params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultListQualityStorageTaskVO>(
        {
            url: "/masterdata-service/qualityStorageTask/getListForStaff",
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
    /** 是否超时(生产任务) */
    isTimeout?: EPublicBacklogDataQuery_isTimeout;
    /** 生产任务可操作类型 */
    optTypes?: EPublicBacklogDataQuery_optTypes_items[];
    /** 工序id集合 */
    processIds?: string[];
    /** 生产任务状态集合 */
    produceTaskStatusList?: EPublicBacklogDataQuery_produceTaskStatusList_items[];
    /** 质检任务状态集合 */
    qualityProduceTaskStatusList?: EPublicBacklogDataQuery_qualityProduceTaskStatusList_items[];
}
/** JSONResult«List«QualityStorageTaskVO»» */
export interface IJSONResultListQualityStorageTaskVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IQualityStorageTaskVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** QualityStorageTaskVO */
export interface IQualityStorageTaskVO {
    /** 取消时间 */
    cancelTime?: number;
    /** 取消人 */
    cancelUserId?: string;
    /** 检验位置id */
    checkPositionId?: string;
    /** 完成时间 */
    completeTime?: number;
    /** 让步接收数 */
    concessionQuantity?: number;
    /** 所属企业id */
    enterpriseId?: string;
    /** 质检处理人 */
    handleUserId?: string;
    /** id */
    id?: string;
    /** 已检数 */
    inspectionQuantity?: number;
    /** 对应物料id */
    materialId?: string;
    /** 不合格数 */
    notPassQuantity?: number;
    /** 合格数 */
    passQuantity?: number;
    /** 计划开始时间 */
    planBeginTime?: number;
    /** 采购收货单物料明细id */
    purchaseWorkOrderDetailId?: string;
    /** 采购收货单id */
    purchaseWorkOrderId?: string;
    /** 对应质检分类id */
    qualityInspectionCategoryId?: string;
    /** 对应质检方案id */
    qualityInspectionPlanId?: string;
    /** 质检仓位id */
    qualityWarehouseId?: string;
    /** 备注 */
    remark?: string;
    /** 状态 */
    status?: EQualityStorageTaskVO_status;
    /** 任务号 */
    taskNo?: string;
    /** 质检任务类型 */
    taskType?: EQualityStorageTaskVO_taskType;
    /** 总质检数 */
    totalInspectionQuantity?: number;
    /** 质检任务类型 */
    type?: EQualityStorageTaskVO_type;
    /** 待检数 */
    waitInspectionQuantity?: number;
}

export enum EPublicBacklogDataQuery_isTimeout {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPublicBacklogDataQuery_optTypes_items {
    CAN_MOVE_IN = "CAN_MOVE_IN",
    CAN_QUALITY = "CAN_QUALITY",
    CAN_MOVE_OUT = "CAN_MOVE_OUT"
}

export enum EPublicBacklogDataQuery_produceTaskStatusList_items {
    WAIT = "WAIT",
    PRODUCE = "PRODUCE",
    PAUSE = "PAUSE",
    STOP = "STOP",
    CLOSE = "CLOSE",
    CANCEL = "CANCEL"
}

export enum EPublicBacklogDataQuery_qualityProduceTaskStatusList_items {
    WAIT = "WAIT",
    COMPLETE = "COMPLETE",
    CANCEL = "CANCEL",
    CLOSE = "CLOSE"
}

export enum EQualityStorageTaskVO_status {
    /** 待质检 */
    WAIT = "WAIT",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已撤销 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}

export enum EQualityStorageTaskVO_taskType {
    /** 入库质检任务 */
    STORAGE_IN_QUALITY_TASK = "STORAGE_IN_QUALITY_TASK",
    /** 存货质检任务 */
    STORAGE_QUALITY_TASK = "STORAGE_QUALITY_TASK"
}

export enum EQualityStorageTaskVO_type {
    /** 全检 */
    ALL = "ALL",
    /** 比例抽检 */
    RADIO_SPOT_CHECK = "RADIO_SPOT_CHECK",
    /** 固定抽检 */
    FIX_SPOT_CHECK = "FIX_SPOT_CHECK"
}
