import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/质检管理/getListForStaffUsingPOST_2
*/
export default function fetchMethod(options: { data: IPublicBacklogDataQueryparams: { enterpriseId?: number; userId?: number, extraOptions?: any) {
    return http<IJSONResultListQualityStorageTaskVO>(
        {
            url: "/masterdata-service/qualityStorageTask/getListForStaff",
            method: "post",
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
    processIds?: number[];
    /** 生产任务状态集合 */
    produceTaskStatusList?: EPublicBacklogDataQuery_produceTaskStatusList_items[];
    /** 是否超时(生产任务) */
    isTimeout?: EPublicBacklogDataQuery_isTimeout;
    /** 质检任务状态集合 */
    qualityProduceTaskStatusList?: EPublicBacklogDataQuery_qualityProduceTaskStatusList_items[];
    /** 生产任务可操作类型 */
    optTypes?: EPublicBacklogDataQuery_optTypes_items[];
}
/** JSONResult«List«QualityStorageTaskVO»» */
export interface IJSONResultListQualityStorageTaskVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IQualityStorageTaskVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** QualityStorageTaskVO */
export interface IQualityStorageTaskVO {
    /** id */
    id?: number;
    /** 所属企业id */
    enterpriseId?: number;
    /** 任务号 */
    taskNo?: string;
    /** 质检任务类型 */
    type?: EQualityStorageTaskVO_type;
    /** 采购收货单id */
    purchaseWorkOrderId?: number;
    /** 对应物料id */
    materialId?: number;
    /** 采购收货单物料明细id */
    purchaseWorkOrderDetailId?: number;
    /** 对应质检方案id */
    qualityInspectionPlanId?: number;
    /** 对应质检分类id */
    qualityInspectionCategoryId?: number;
    /** 质检仓位id */
    qualityWarehouseId?: number;
    /** 检验位置id */
    checkPositionId?: number;
    /** 质检处理人 */
    handleUserId?: number;
    /** 计划开始时间 */
    planBeginTime?: string;
    /** 总质检数 */
    totalInspectionQuantity?: number;
    /** 待检数 */
    waitInspectionQuantity?: number;
    /** 已检数 */
    inspectionQuantity?: number;
    /** 合格数 */
    passQuantity?: number;
    /** 不合格数 */
    notPassQuantity?: number;
    /** 让步接收数 */
    concessionQuantity?: number;
    /** 完成时间 */
    completeTime?: string;
    /** 备注 */
    remark?: string;
    /** 状态 */
    status?: EQualityStorageTaskVO_status;
    /** 取消人 */
    cancelUserId?: number;
    /** 取消时间 */
    cancelTime?: string;
    /** 质检任务类型 */
    taskType?: EQualityStorageTaskVO_taskType;
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

export enum EQualityStorageTaskVO_type {
    /** 全检 */
    ALL = "ALL",
    /** 比例抽检 */
    RADIO_SPOT_CHECK = "RADIO_SPOT_CHECK",
    /** 固定抽检 */
    FIX_SPOT_CHECK = "FIX_SPOT_CHECK"
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
