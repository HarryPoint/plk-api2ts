import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产质检管理/getCountInfoByMaterialIdUsingGET
*/
export default function fetchMethod(options: { params: { beginTime?: string; endTime?: string; materialId?: string; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultCheckInformationVO>(
        {
            url: "/masterdata-service/qualityProduceTask/getCountInfoByMaterialId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«质检物料校验信息VO» */
export interface IJSONResultCheckInformationVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IQcMaterialVerificationInformationVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 质检物料校验信息VO */
export interface IQcMaterialVerificationInformationVO {
    /** 让步接收数量 */
    concessionQuantity?: number;
    /** 不合格数量 */
    notPassQuantity?: number;
    /** 合格数量 */
    passQuantity?: number;
    /** 质检方案质检项关联map， key：质检方案质检项关联id， value：质检方案质检项id关系 */
    qualityPlanItemIdMap?: Record<string, IQualityInspectionSolutionQualityInspectionItemIdVO>;
    /** 质检任务信息 */
    qualityProduceTask?: IQualityProduceTaskVO;
    /** 仓库质检任务信息 */
    qualityStorageTask?: IQualityStorageTaskVO;
}
/** 质检方案质检项idVO */
export interface IQualityInspectionSolutionQualityInspectionItemIdVO {
    /** undefined */
    qualityItemId?: string;
    /** undefined */
    qualityPlanId?: string;
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
