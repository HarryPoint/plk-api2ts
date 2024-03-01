import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/首检检验任务相关/queryTaskInfoUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultFirstCheckChecksTheTaskResponseObject>(
        {
            url: "/masterdata-service/qmsFirstInspectionTask/queryTaskInfo",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«首检检验任务响应对象» */
export interface IJSONResultFirstCheckChecksTheTaskResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheFirstCheckChecksTheTaskResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 首检检验任务响应对象 */
export interface ITheFirstCheckChecksTheTaskResponseObject {
    /** undefined */
    applyDate?: number;
    /** undefined */
    applyDepartmentId?: string;
    /** undefined */
    applyEmployeeId?: string;
    /** undefined */
    applyInspectAddress?: string;
    /** undefined */
    applyInspectDate?: number;
    /** undefined */
    areaId?: string;
    /** undefined */
    businessType?: ETheFirstCheckChecksTheTaskResponseObject_businessType;
    /** undefined */
    code?: string;
    /** undefined */
    edition?: string;
    /** id */
    id?: string;
    /** undefined */
    inspectionApplyFiles?: string;
    /** undefined */
    inspectionApplyQuantity?: number;
    /** undefined */
    inspectionCompletedDate?: number;
    /** undefined */
    inspectionEmployeeIds?: Record<string, any>[];
    /** undefined */
    inspectionEmployees?: IAssociateFormDataVO[];
    /** undefined */
    inspectionEndDate?: number;
    /** undefined */
    inspectionMethod?: ETheFirstCheckChecksTheTaskResponseObject_inspectionMethod;
    /** undefined */
    inspectionQuantity?: number;
    /** undefined */
    inspectionRecordFiles?: string;
    /** undefined */
    inspectionResultDesc?: string;
    /** undefined */
    inspectionSchemeFiles?: string;
    /** undefined */
    isAssignment?: ETheFirstCheckChecksTheTaskResponseObject_isAssignment;
    /** undefined */
    isEmergent?: ETheFirstCheckChecksTheTaskResponseObject_isEmergent;
    /** undefined */
    isOverdue?: ETheFirstCheckChecksTheTaskResponseObject_isOverdue;
    /** undefined */
    isTemporarily?: ETheFirstCheckChecksTheTaskResponseObject_isTemporarily;
    /** undefined */
    lot?: string;
    /** undefined */
    materialCode?: string;
    /** undefined */
    materialId?: string;
    /** undefined */
    materialSpec?: string;
    /** undefined */
    materialUnitId?: string;
    /** undefined */
    mutualInspectionEmployeeIds?: string[];
    /** undefined */
    mutualInspectionResult?: ETheFirstCheckChecksTheTaskResponseObject_mutualInspectionResult;
    /** undefined */
    mutualQualifiedQuantity?: number;
    /** undefined */
    mutualRecords?: IFirstCheckCheckTaskMutualCheckRecordResponseObject[];
    /** undefined */
    mutualUnQualifiedQuantity?: number;
    /** undefined */
    overdueDay?: number;
    /** undefined */
    processId?: string;
    /** undefined */
    productionLineId?: string;
    /** undefined */
    qmsInspectionApplyFormMaterialDetailId?: string;
    /** undefined */
    qmsInspectionCategoryId?: string;
    /** undefined */
    qmsInspectionSchemeId?: string;
    /** undefined */
    selfInspectionEmployeeIds?: string[];
    /** undefined */
    selfInspectionResult?: ETheFirstCheckChecksTheTaskResponseObject_selfInspectionResult;
    /** undefined */
    selfQualifiedQuantity?: number;
    /** undefined */
    selfRecords?: IFirstCheckCheckSelfCheckRecordResponseObject[];
    /** undefined */
    selfUnQualifiedQuantity?: number;
    /** undefined */
    specialInspectionResult?: ETheFirstCheckChecksTheTaskResponseObject_specialInspectionResult;
    /** undefined */
    specialQualifiedQuantity?: number;
    /** undefined */
    specialRecords?: IFirstCheckCheckSpecialCheckRecordResponseObject[];
    /** undefined */
    specialUnQualifiedQuantity?: number;
    /** undefined */
    taskStartDate?: number;
    /** undefined */
    taskStatus?: ETheFirstCheckChecksTheTaskResponseObject_taskStatus;
    /** undefined */
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
/** 首检检验任务互检记录响应对象 */
export interface IFirstCheckCheckTaskMutualCheckRecordResponseObject {
    /** undefined */
    descriptionOfNonconformities?: string;
    /** id */
    id?: string;
    /** undefined */
    inspectionActualValue?: string;
    /** undefined */
    inspectionResult?: EFirstCheckCheckTaskMutualCheckRecordResponseObject_inspectionResult;
    /** undefined */
    inspectionResultsOfIndividualParts?: EFirstCheckCheckTaskMutualCheckRecordResponseObject_inspectionResultsOfIndividualParts;
    /** undefined */
    inspectionStandardValue?: string;
    /** undefined */
    partNumber?: string;
    /** undefined */
    qmsInspectionItemsId?: string;
}
/** 首检检验检验自检记录响应对象 */
export interface IFirstCheckCheckSelfCheckRecordResponseObject {
    /** undefined */
    descriptionOfNonconformities?: string;
    /** undefined */
    id?: string;
    /** undefined */
    inspectionActualValue?: string;
    /** undefined */
    inspectionResult?: EFirstCheckCheckSelfCheckRecordResponseObject_inspectionResult;
    /** undefined */
    inspectionResultsOfIndividualParts?: EFirstCheckCheckSelfCheckRecordResponseObject_inspectionResultsOfIndividualParts;
    /** undefined */
    inspectionStandardValue?: string;
    /** undefined */
    partNumber?: string;
    /** undefined */
    qmsInspectionItemsId?: string;
}
/** 首检检验专检记录响应对象 */
export interface IFirstCheckCheckSpecialCheckRecordResponseObject {
    /** undefined */
    descriptionOfNonconformities?: string;
    /** undefined */
    id?: string;
    /** undefined */
    inspectionActualValue?: string;
    /** undefined */
    inspectionResult?: EFirstCheckCheckSpecialCheckRecordResponseObject_inspectionResult;
    /** undefined */
    inspectionResultsOfIndividualParts?: EFirstCheckCheckSpecialCheckRecordResponseObject_inspectionResultsOfIndividualParts;
    /** undefined */
    inspectionStandardValue?: string;
    /** undefined */
    partNumber?: string;
    /** undefined */
    qmsInspectionItemsId?: string;
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

export enum ETheFirstCheckChecksTheTaskResponseObject_inspectionMethod {
    SPOT_CHECK = "SPOT_CHECK",
    ALL_CHECK = "ALL_CHECK"
}

export enum ETheFirstCheckChecksTheTaskResponseObject_isAssignment {
    Y = "Y",
    N = "N"
}

export enum ETheFirstCheckChecksTheTaskResponseObject_isEmergent {
    Y = "Y",
    N = "N"
}

export enum ETheFirstCheckChecksTheTaskResponseObject_isOverdue {
    Y = "Y",
    N = "N"
}

export enum ETheFirstCheckChecksTheTaskResponseObject_isTemporarily {
    Y = "Y",
    N = "N"
}

export enum ETheFirstCheckChecksTheTaskResponseObject_mutualInspectionResult {
    Y = "Y",
    N = "N"
}

export enum ETheFirstCheckChecksTheTaskResponseObject_selfInspectionResult {
    Y = "Y",
    N = "N"
}

export enum ETheFirstCheckChecksTheTaskResponseObject_specialInspectionResult {
    Y = "Y",
    N = "N"
}

export enum ETheFirstCheckChecksTheTaskResponseObject_taskStatus {
    WAIT = "WAIT",
    HANDLING = "HANDLING",
    CANCEL = "CANCEL",
    COMPLETE = "COMPLETE"
}

export enum EAssociateFormDataVO_isRemovedShowField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EFirstCheckCheckTaskMutualCheckRecordResponseObject_inspectionResult {
    QUALIFIED = "QUALIFIED",
    UN_QUALIFIED = "UN_QUALIFIED",
    UNSUITED = "UNSUITED"
}

export enum EFirstCheckCheckTaskMutualCheckRecordResponseObject_inspectionResultsOfIndividualParts {
    QUALIFIED = "QUALIFIED",
    UN_QUALIFIED = "UN_QUALIFIED",
    UNSUITED = "UNSUITED"
}

export enum EFirstCheckCheckSelfCheckRecordResponseObject_inspectionResult {
    QUALIFIED = "QUALIFIED",
    UN_QUALIFIED = "UN_QUALIFIED",
    UNSUITED = "UNSUITED"
}

export enum EFirstCheckCheckSelfCheckRecordResponseObject_inspectionResultsOfIndividualParts {
    QUALIFIED = "QUALIFIED",
    UN_QUALIFIED = "UN_QUALIFIED",
    UNSUITED = "UNSUITED"
}

export enum EFirstCheckCheckSpecialCheckRecordResponseObject_inspectionResult {
    QUALIFIED = "QUALIFIED",
    UN_QUALIFIED = "UN_QUALIFIED",
    UNSUITED = "UNSUITED"
}

export enum EFirstCheckCheckSpecialCheckRecordResponseObject_inspectionResultsOfIndividualParts {
    QUALIFIED = "QUALIFIED",
    UN_QUALIFIED = "UN_QUALIFIED",
    UNSUITED = "UNSUITED"
}
