import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/工序检验任务相关/queryTaskInfoUsingGET_1
*/
export default function fetchMethod(options: { params: { Id?: string } }, extraOptions?: any) {
    return http<IJSONResultProcessCheckTaskResponseObject>(
        {
            url: "/masterdata-service/qmsProcessInspectionTask/queryTaskInfo",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«工序检检验任务响应对象» */
export interface IJSONResultProcessCheckTaskResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProcessCheckCheckTaskResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 工序检检验任务响应对象 */
export interface IProcessCheckCheckTaskResponseObject {
    /** 报检日期 */
    applyDate?: number;
    /** 报检部门 */
    applyDepartmentId?: string;
    /** 报检员 */
    applyEmployeeId?: string;
    /** 申请验收地点 */
    applyInspectAddress?: string;
    /** 申请验收日期 */
    applyInspectDate?: number;
    /** 区域id */
    areaId?: string;
    /** 业务类型 */
    businessType?: EProcessCheckCheckTaskResponseObject_businessType;
    /** 任务编号 */
    code?: string;
    /** 版次 */
    edition?: string;
    /** id */
    id?: string;
    /** 报检附件 */
    inspectionApplyFiles?: string;
    /** 报检数量 */
    inspectionApplyQuantity?: number;
    /** 检验完成日期 */
    inspectionCompletedDate?: number;
    /** 检验员 */
    inspectionEmployeeIds?: Record<string, any>[];
    /** 检验员 */
    inspectionEmployees?: IAssociateFormDataVO[];
    /** 检验截止日期 */
    inspectionEndDate?: number;
    /** 检验方式 */
    inspectionMethod?: EProcessCheckCheckTaskResponseObject_inspectionMethod;
    /** 检验数量 */
    inspectionQuantity?: number;
    /** 检验记录附件 */
    inspectionRecordFiles?: string;
    /** 检验结果描述 */
    inspectionResultDesc?: string;
    /** 方案附件 */
    inspectionSchemeFiles?: string;
    /** 分配状态 */
    isAssignment?: EProcessCheckCheckTaskResponseObject_isAssignment;
    /** 是否紧急 */
    isEmergent?: EProcessCheckCheckTaskResponseObject_isEmergent;
    /** 是否超期 */
    isOverdue?: EProcessCheckCheckTaskResponseObject_isOverdue;
    /** 是否临检 */
    isTemporarily?: EProcessCheckCheckTaskResponseObject_isTemporarily;
    /** 批次 */
    lot?: string;
    /** 对应物料code */
    materialCode?: string;
    /** 物料名称 */
    materialId?: string;
    /** 对应物料规格 */
    materialSpec?: string;
    /** 对应物料单位 */
    materialUnitId?: string;
    /** 互检员 */
    mutualInspectionEmployeeIds?: string[];
    /** 互检检验结果 */
    mutualInspectionResult?: EProcessCheckCheckTaskResponseObject_mutualInspectionResult;
    /** 互检合格数 */
    mutualQualifiedQuantity?: number;
    /** 互检记录 */
    mutualRecords?: IProcessCheckCheckTaskMutualCheckRecordResponseObject[];
    /** 互检不合格数 */
    mutualUnQualifiedQuantity?: number;
    /** 超期天数 */
    overdueDay?: number;
    /** 工序id */
    processId?: string;
    /** 产线id */
    productionLineId?: string;
    /** 报检单物料明细id */
    qmsInspectionApplyFormMaterialDetailId?: string;
    /** 物料检验类别 */
    qmsInspectionCategoryId?: string;
    /** 检验方案id */
    qmsInspectionSchemeId?: string;
    /** 自检员 */
    selfInspectionEmployeeIds?: string[];
    /** 自检检验结果 */
    selfInspectionResult?: EProcessCheckCheckTaskResponseObject_selfInspectionResult;
    /** 自检合格数 */
    selfQualifiedQuantity?: number;
    /** 专检记录 */
    selfRecords?: IFirstCheckSelfCheckRecordResponseObject[];
    /** 自检不合格数 */
    selfUnQualifiedQuantity?: number;
    /** 专检检验结果 */
    specialInspectionResult?: EProcessCheckCheckTaskResponseObject_specialInspectionResult;
    /** 专检合格数 */
    specialQualifiedQuantity?: number;
    /** 自检记录 */
    specialRecords?: IProcessInspectionInspectionSpecialInspectionRecordResponseObject[];
    /** 专检不合格数 */
    specialUnQualifiedQuantity?: number;
    /** 开始时间 */
    taskStartDate?: number;
    /** 任务执行状态 */
    taskStatus?: EProcessCheckCheckTaskResponseObject_taskStatus;
    /** 三检制选择 */
    threeInspectionSystems?: Record<string, any>[];
}
/** 关联表单数据VO */
export interface IAssociateFormDataVO {
    /** 数据状态 */
    dataStatus?: number;
    /** id */
    id?: string;
    /** 是否已删除显示字段 */
    isRemovedShowField?: EAssociateFormDataVO_isRemovedShowField;
    /** 主数据ID */
    masterDataId?: string;
    /** 关联表单显示值 */
    showFieldValue?: string;
}
/** 工序检检验任务互检记录响应对象 */
export interface IProcessCheckCheckTaskMutualCheckRecordResponseObject {
    /** 不合格情况描述 */
    descriptionOfNonconformities?: string;
    /** id */
    id?: string;
    /** 实测值 */
    inspectionActualValue?: string;
    /** 检验结果 */
    inspectionResult?: EProcessCheckCheckTaskMutualCheckRecordResponseObject_inspectionResult;
    /** 零件检验结果 */
    inspectionResultsOfIndividualParts?: EProcessCheckCheckTaskMutualCheckRecordResponseObject_inspectionResultsOfIndividualParts;
    /** 标准值 */
    inspectionStandardValue?: string;
    /** 零件号 */
    partNumber?: string;
    /** 检验项id */
    qmsInspectionItemsId?: string;
}
/** 首检自检记录响应对象 */
export interface IFirstCheckSelfCheckRecordResponseObject {
    /** 不合格情况描述 */
    descriptionOfNonconformities?: string;
    /** id */
    id?: string;
    /** 实测值 */
    inspectionActualValue?: string;
    /** 检验结果 */
    inspectionResult?: EFirstCheckSelfCheckRecordResponseObject_inspectionResult;
    /** 零件检验结果 */
    inspectionResultsOfIndividualParts?: EFirstCheckSelfCheckRecordResponseObject_inspectionResultsOfIndividualParts;
    /** 标准值 */
    inspectionStandardValue?: string;
    /** 零件号 */
    partNumber?: string;
    /** 检验项id */
    qmsInspectionItemsId?: string;
}
/** 工序检检验专检记录响应对象 */
export interface IProcessInspectionInspectionSpecialInspectionRecordResponseObject {
    /** 不合格情况描述 */
    descriptionOfNonconformities?: string;
    /** id */
    id?: string;
    /** 实测值 */
    inspectionActualValue?: string;
    /** 检验结果 */
    inspectionResult?: EProcessInspectionInspectionSpecialInspectionRecordResponseObject_inspectionResult;
    /** 零件检验结果 */
    inspectionResultsOfIndividualParts?: EProcessInspectionInspectionSpecialInspectionRecordResponseObject_inspectionResultsOfIndividualParts;
    /** 标准值 */
    inspectionStandardValue?: string;
    /** 零件号 */
    partNumber?: string;
    /** 检验项id */
    qmsInspectionItemsId?: string;
}

export enum EProcessCheckCheckTaskResponseObject_businessType {
    /** 客户投诉 */
    CUSTOMER_COMPLAIN = "CUSTOMER_COMPLAIN",
    /** 来料检 */
    INCOMING_INSPECTION = "INCOMING_INSPECTION",
    /** 首检 */
    FIRST_INSPECTION = "FIRST_INSPECTION",
    /** 巡检 */
    PATROL_INSPECTION = "PATROL_INSPECTION",
    /** 工序检 */
    PROCESS_INSPECTION = "PROCESS_INSPECTION",
    /** 成品检 */
    PRODUCT_INSPECTION = "PRODUCT_INSPECTION",
    /** 出货检 */
    SHIPMENT_INSPECTION = "SHIPMENT_INSPECTION",
    /** 试验 */
    EXPERIMENT = "EXPERIMENT",
    /** 其它 */
    OTHER = "OTHER"
}

export enum EProcessCheckCheckTaskResponseObject_inspectionMethod {
    /** 抽检 */
    SPOT_CHECK = "SPOT_CHECK",
    /** 全检 */
    ALL_CHECK = "ALL_CHECK"
}

export enum EProcessCheckCheckTaskResponseObject_isAssignment {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessCheckCheckTaskResponseObject_isEmergent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessCheckCheckTaskResponseObject_isOverdue {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessCheckCheckTaskResponseObject_isTemporarily {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessCheckCheckTaskResponseObject_mutualInspectionResult {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessCheckCheckTaskResponseObject_selfInspectionResult {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessCheckCheckTaskResponseObject_specialInspectionResult {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessCheckCheckTaskResponseObject_taskStatus {
    /** 待执行 */
    WAIT = "WAIT",
    /** 进行中 */
    HANDLING = "HANDLING",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已完成 */
    COMPLETE = "COMPLETE"
}

export enum EAssociateFormDataVO_isRemovedShowField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessCheckCheckTaskMutualCheckRecordResponseObject_inspectionResult {
    /** 合格 */
    QUALIFIED = "QUALIFIED",
    /** 不合格 */
    UN_QUALIFIED = "UN_QUALIFIED",
    /** 不适用 */
    UNSUITED = "UNSUITED"
}

export enum EProcessCheckCheckTaskMutualCheckRecordResponseObject_inspectionResultsOfIndividualParts {
    /** 合格 */
    QUALIFIED = "QUALIFIED",
    /** 不合格 */
    UN_QUALIFIED = "UN_QUALIFIED",
    /** 不适用 */
    UNSUITED = "UNSUITED"
}

export enum EFirstCheckSelfCheckRecordResponseObject_inspectionResult {
    /** 合格 */
    QUALIFIED = "QUALIFIED",
    /** 不合格 */
    UN_QUALIFIED = "UN_QUALIFIED",
    /** 不适用 */
    UNSUITED = "UNSUITED"
}

export enum EFirstCheckSelfCheckRecordResponseObject_inspectionResultsOfIndividualParts {
    /** 合格 */
    QUALIFIED = "QUALIFIED",
    /** 不合格 */
    UN_QUALIFIED = "UN_QUALIFIED",
    /** 不适用 */
    UNSUITED = "UNSUITED"
}

export enum EProcessInspectionInspectionSpecialInspectionRecordResponseObject_inspectionResult {
    /** 合格 */
    QUALIFIED = "QUALIFIED",
    /** 不合格 */
    UN_QUALIFIED = "UN_QUALIFIED",
    /** 不适用 */
    UNSUITED = "UNSUITED"
}

export enum EProcessInspectionInspectionSpecialInspectionRecordResponseObject_inspectionResultsOfIndividualParts {
    /** 合格 */
    QUALIFIED = "QUALIFIED",
    /** 不合格 */
    UN_QUALIFIED = "UN_QUALIFIED",
    /** 不适用 */
    UNSUITED = "UNSUITED"
}
