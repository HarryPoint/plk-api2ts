import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产质检管理/getListForStaffUsingPOST_1
*/
export default function fetchMethod(options: { data: IPublicBacklogDataQuery, params: { EnterpriseId?: string; UserId?: string } }, extraOptions?: any) {
    return http<IJSONResultListQualityProduceTaskVO>(
        {
            url: "/masterdata-service/qualityProduceTask/getListForStaff",
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
/** JSONResult«List«QualityProduceTaskVO»» */
export interface IJSONResultListQualityProduceTaskVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IQualityProduceTaskVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** QualityProduceTaskVO */
export interface IQualityProduceTaskVO {
    /** 实际质检开始时间 */
    actualBeginTime?: number;
    /** 实际质检结束时间 */
    actualEndTime?: number;
    /** 取消原因 */
    cancelRemark?: string;
    /** 取消时间 */
    cancelTime?: number;
    /** 取消人 */
    cancelUserId?: string;
    /** 对应班组id */
    classGroupId?: string;
    /** 对应班次id */
    classShiftId?: string;
    /** 让步接收数 */
    concessionQuantity?: number;
    /** 创建时间 */
    createTime?: number;
    /** 所属企业id */
    enterpriseId?: string;
    /** 对应工厂日历id */
    factoryCalendarId?: string;
    /** id */
    id?: string;
    /** 已检数 */
    inspectionQuantity?: number;
    /** 质检时间 */
    inspectionTime?: number;
    /** 质检人 */
    inspectionUserId?: string;
    /** 批次订单id */
    lotOrderId?: string;
    /** 批次订单号 */
    lotOrderNo?: string;
    /** 对应物料id */
    materialId?: string;
    /** 不合格数 */
    notPassQuantity?: number;
    /** 合格数 */
    passQuantity?: number;
    /** 对应工序id */
    processId?: string;
    /** 对应生产处理id */
    produceHandleId?: string;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 生产订单id */
    produceOrderId?: string;
    /** 所属生产任务id */
    produceTaskId?: string;
    /** 所属生产任务号 */
    produceTaskNo?: string;
    /** 生产任务类型 */
    produceTaskType?: EQualityProduceTaskVO_produceTaskType;
    /** 仓位物料WIP关联数量状态 */
    quantityStatus?: EQualityProduceTaskVO_quantityStatus;
    /** 备注 */
    remark?: string;
    /** 对应工艺路径id */
    routingId?: string;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 对应工艺路径步骤id */
    routingStepId?: string;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 所属销售订单详情id */
    salesOrderDetailId?: string;
    /** 销售订单id */
    salesOrderId?: string;
    /** 状态 */
    status?: EQualityProduceTaskVO_status;
    /** 任务号 */
    taskNo?: string;
    /** 总质检数 */
    totalInspectionQuantity?: number;
    /** 质检任务类型 */
    type?: EQualityProduceTaskVO_type;
    /** 待检数 */
    waitInspectionQuantity?: number;
    /** 仓位物料库存关联id */
    warehouseMaterialRpId?: string;
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

export enum EQualityProduceTaskVO_produceTaskType {
    /** 生产任务 */
    PRODUCE = "PRODUCE",
    /** 返工任务 */
    BACK = "BACK"
}

export enum EQualityProduceTaskVO_quantityStatus {
    /** 正常 */
    NORMAL = "NORMAL",
    /** 等待质检 */
    WAIT_INSPECTION = "WAIT_INSPECTION",
    /** 质检合格 */
    INSPECTION_PASS = "INSPECTION_PASS",
    /** 质检让步接收 */
    INSPECTION_CONCESSION = "INSPECTION_CONCESSION",
    /** 质检不合格 */
    INSPECTION_NOT_PASS = "INSPECTION_NOT_PASS",
    /** 等待返工审批 */
    APPLY_BACK = "APPLY_BACK",
    /** 等待报废审批 */
    APPLY_SCRAP = "APPLY_SCRAP",
    /** 等待扣留审批 */
    HOLD = "HOLD",
    /** 委外返回 */
    ENTRUST_BACK = "ENTRUST_BACK"
}

export enum EQualityProduceTaskVO_status {
    /** 待质检 */
    WAIT = "WAIT",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已撤销 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}

export enum EQualityProduceTaskVO_type {
    /** 全检 */
    ALL = "ALL",
    /** 比例抽检 */
    RADIO_SPOT_CHECK = "RADIO_SPOT_CHECK",
    /** 固定抽检 */
    FIX_SPOT_CHECK = "FIX_SPOT_CHECK"
}
