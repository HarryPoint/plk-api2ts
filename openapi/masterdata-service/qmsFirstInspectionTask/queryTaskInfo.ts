import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/首检检验任务相关/queryTaskInfoUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultFirstCheckChecksTheTaskResponseObject>(
        {
            url: "/masterdata-service/qmsFirstInspectionTask/queryTaskInfo",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«首检检验任务响应对象» */
export interface IJSONResultFirstCheckChecksTheTaskResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheFirstCheckChecksTheTaskResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 首检检验任务响应对象 */
export interface ITheFirstCheckChecksTheTaskResponseObject {
    /** id */
    id?: string;
    /** undefined */
    code?: string;
    /** undefined */
    businessType?: ETheFirstCheckChecksTheTaskResponseObject_businessType;
    /** undefined */
    isEmergent?: ETheFirstCheckChecksTheTaskResponseObject_isEmergent;
    /** undefined */
    isTemporarily?: ETheFirstCheckChecksTheTaskResponseObject_isTemporarily;
    /** undefined */
    qmsInspectionApplyFormMaterialDetailId?: string;
    /** undefined */
    applyDate?: number;
    /** undefined */
    applyEmployeeId?: string;
    /** undefined */
    applyDepartmentId?: string;
    /** undefined */
    areaId?: string;
    /** undefined */
    productionLineId?: string;
    /** undefined */
    processId?: string;
    /** undefined */
    materialId?: string;
    /** undefined */
    qmsInspectionCategoryId?: string;
    /** undefined */
    materialCode?: string;
    /** undefined */
    materialSpec?: string;
    /** undefined */
    materialUnitId?: string;
    /** undefined */
    lot?: string;
    /** undefined */
    inspectionApplyQuantity?: number;
    /** undefined */
    threeInspectionSystems?: Record<string, any>[];
    /** undefined */
    selfInspectionEmployeeIds?: string[];
    /** undefined */
    mutualInspectionEmployeeIds?: string[];
    /** undefined */
    inspectionMethod?: ETheFirstCheckChecksTheTaskResponseObject_inspectionMethod;
    /** undefined */
    inspectionQuantity?: number;
    /** undefined */
    selfQualifiedQuantity?: number;
    /** undefined */
    selfUnQualifiedQuantity?: number;
    /** undefined */
    selfInspectionResult?: ETheFirstCheckChecksTheTaskResponseObject_selfInspectionResult;
    /** undefined */
    mutualQualifiedQuantity?: number;
    /** undefined */
    mutualUnQualifiedQuantity?: number;
    /** undefined */
    mutualInspectionResult?: ETheFirstCheckChecksTheTaskResponseObject_mutualInspectionResult;
    /** undefined */
    specialQualifiedQuantity?: number;
    /** undefined */
    specialUnQualifiedQuantity?: number;
    /** undefined */
    specialInspectionResult?: ETheFirstCheckChecksTheTaskResponseObject_specialInspectionResult;
    /** undefined */
    applyInspectAddress?: string;
    /** undefined */
    applyInspectDate?: number;
    /** undefined */
    inspectionApplyFiles?: string;
    /** undefined */
    edition?: string;
    /** undefined */
    inspectionSchemeFiles?: string;
    /** undefined */
    inspectionRecordFiles?: string;
    /** undefined */
    inspectionResultDesc?: string;
    /** undefined */
    qmsInspectionSchemeId?: string;
    /** undefined */
    inspectionEmployeeIds?: Record<string, any>[];
    /** undefined */
    inspectionEmployees?: IAssociateFormDataVO[];
    /** undefined */
    isAssignment?: ETheFirstCheckChecksTheTaskResponseObject_isAssignment;
    /** undefined */
    inspectionEndDate?: number;
    /** undefined */
    inspectionCompletedDate?: number;
    /** undefined */
    taskStartDate?: number;
    /** undefined */
    taskStatus?: ETheFirstCheckChecksTheTaskResponseObject_taskStatus;
    /** undefined */
    isOverdue?: ETheFirstCheckChecksTheTaskResponseObject_isOverdue;
    /** undefined */
    overdueDay?: number;
    /** undefined */
    mutualRecords?: IFirstCheckCheckTaskMutualCheckRecordResponseObject[];
    /** undefined */
    specialRecords?: IFirstCheckCheckSpecialCheckRecordResponseObject[];
    /** undefined */
    selfRecords?: IFirstCheckCheckSelfCheckRecordResponseObject[];
}
/** 关联表单数据VO */
export interface IAssociateFormDataVO {
    /** id */
    id?: string;
    /** 关联表单显示值 */
    showFieldValue?: string;
    /** 数据状态 */
    dataStatus?: number;
    /** 是否已删除显示字段 */
    isRemovedShowField?: EAssociateFormDataVO_isRemovedShowField;
    /** 主数据ID */
    masterDataId?: string;
}
/** 首检检验任务互检记录响应对象 */
export interface IFirstCheckCheckTaskMutualCheckRecordResponseObject {
    /** id */
    id?: string;
    /** undefined */
    partNumber?: string;
    /** undefined */
    inspectionResultsOfIndividualParts?: EFirstCheckCheckTaskMutualCheckRecordResponseObject_inspectionResultsOfIndividualParts;
    /** undefined */
    descriptionOfNonconformities?: string;
    /** undefined */
    qmsInspectionItemsId?: string;
    /** undefined */
    inspectionStandardValue?: string;
    /** undefined */
    inspectionActualValue?: string;
    /** undefined */
    inspectionResult?: EFirstCheckCheckTaskMutualCheckRecordResponseObject_inspectionResult;
}
/** 首检检验专检记录响应对象 */
export interface IFirstCheckCheckSpecialCheckRecordResponseObject {
    /** undefined */
    id?: string;
    /** undefined */
    partNumber?: string;
    /** undefined */
    inspectionResultsOfIndividualParts?: EFirstCheckCheckSpecialCheckRecordResponseObject_inspectionResultsOfIndividualParts;
    /** undefined */
    descriptionOfNonconformities?: string;
    /** undefined */
    qmsInspectionItemsId?: string;
    /** undefined */
    inspectionStandardValue?: string;
    /** undefined */
    inspectionActualValue?: string;
    /** undefined */
    inspectionResult?: EFirstCheckCheckSpecialCheckRecordResponseObject_inspectionResult;
}
/** 首检检验检验自检记录响应对象 */
export interface IFirstCheckCheckSelfCheckRecordResponseObject {
    /** undefined */
    id?: string;
    /** undefined */
    partNumber?: string;
    /** undefined */
    inspectionResultsOfIndividualParts?: EFirstCheckCheckSelfCheckRecordResponseObject_inspectionResultsOfIndividualParts;
    /** undefined */
    descriptionOfNonconformities?: string;
    /** undefined */
    qmsInspectionItemsId?: string;
    /** undefined */
    inspectionStandardValue?: string;
    /** undefined */
    inspectionActualValue?: string;
    /** undefined */
    inspectionResult?: EFirstCheckCheckSelfCheckRecordResponseObject_inspectionResult;
}

export enum ETheFirstCheckChecksTheTaskResponseObject_businessType {
    CUSTOMER_COMPLAIN = "CUSTOMER_COMPLAIN",
    INCOMING_INSPECTION = "INCOMING_INSPECTION",
    FIRST_INSPECTION = "FIRST_INSPECTION",
    PATROL_INSPECTION = "PATROL_INSPECTION",
    PROCESS_INSPECTION = "PROCESS_INSPECTION",
    PRODUCT_INSPECTION = "PRODUCT_INSPECTION",
    SHIPMENT_INSPECTION = "SHIPMENT_INSPECTION",
    EXPERIMENT = "EXPERIMENT",
    OTHER = "OTHER"
}

export enum ETheFirstCheckChecksTheTaskResponseObject_isEmergent {
    Y = "Y",
    N = "N"
}

export enum ETheFirstCheckChecksTheTaskResponseObject_isTemporarily {
    Y = "Y",
    N = "N"
}

export enum ETheFirstCheckChecksTheTaskResponseObject_inspectionMethod {
    SPOT_CHECK = "SPOT_CHECK",
    ALL_CHECK = "ALL_CHECK"
}

export enum ETheFirstCheckChecksTheTaskResponseObject_selfInspectionResult {
    Y = "Y",
    N = "N"
}

export enum ETheFirstCheckChecksTheTaskResponseObject_mutualInspectionResult {
    Y = "Y",
    N = "N"
}

export enum ETheFirstCheckChecksTheTaskResponseObject_specialInspectionResult {
    Y = "Y",
    N = "N"
}

export enum ETheFirstCheckChecksTheTaskResponseObject_isAssignment {
    Y = "Y",
    N = "N"
}

export enum ETheFirstCheckChecksTheTaskResponseObject_taskStatus {
    WAIT = "WAIT",
    HANDLING = "HANDLING",
    CANCEL = "CANCEL",
    COMPLETE = "COMPLETE"
}

export enum ETheFirstCheckChecksTheTaskResponseObject_isOverdue {
    Y = "Y",
    N = "N"
}

export enum EAssociateFormDataVO_isRemovedShowField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EFirstCheckCheckTaskMutualCheckRecordResponseObject_inspectionResultsOfIndividualParts {
    QUALIFIED = "QUALIFIED",
    UN_QUALIFIED = "UN_QUALIFIED",
    UNSUITED = "UNSUITED"
}

export enum EFirstCheckCheckTaskMutualCheckRecordResponseObject_inspectionResult {
    QUALIFIED = "QUALIFIED",
    UN_QUALIFIED = "UN_QUALIFIED",
    UNSUITED = "UNSUITED"
}

export enum EFirstCheckCheckSpecialCheckRecordResponseObject_inspectionResultsOfIndividualParts {
    QUALIFIED = "QUALIFIED",
    UN_QUALIFIED = "UN_QUALIFIED",
    UNSUITED = "UNSUITED"
}

export enum EFirstCheckCheckSpecialCheckRecordResponseObject_inspectionResult {
    QUALIFIED = "QUALIFIED",
    UN_QUALIFIED = "UN_QUALIFIED",
    UNSUITED = "UNSUITED"
}

export enum EFirstCheckCheckSelfCheckRecordResponseObject_inspectionResultsOfIndividualParts {
    QUALIFIED = "QUALIFIED",
    UN_QUALIFIED = "UN_QUALIFIED",
    UNSUITED = "UNSUITED"
}

export enum EFirstCheckCheckSelfCheckRecordResponseObject_inspectionResult {
    QUALIFIED = "QUALIFIED",
    UN_QUALIFIED = "UN_QUALIFIED",
    UNSUITED = "UNSUITED"
}
