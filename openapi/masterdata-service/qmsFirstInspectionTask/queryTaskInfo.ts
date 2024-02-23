import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/首检检验任务相关/queryTaskInfoUsingGET
export default function fetchMethod(params: { id: string }) {
    return get<IJSONResultFirstCheckChecksTheTaskResponseObject['data']>({
      url: "/masterdata-service/qmsFirstInspectionTask/queryTaskInfo",
      params,
    });
}
// JSONResult«首检检验任务响应对象»
export interface IJSONResultFirstCheckChecksTheTaskResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheFirstCheckChecksTheTaskResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 首检检验任务响应对象
export interface ITheFirstCheckChecksTheTaskResponseObject {
    // id
    id: number;
    // undefined
    code: string;
    // undefined
    businessType: string;
    // undefined
    isEmergent: string;
    // undefined
    isTemporarily: string;
    // undefined
    qmsInspectionApplyFormMaterialDetailId: number;
    // undefined
    applyDate: string;
    // undefined
    applyEmployeeId: number;
    // undefined
    applyDepartmentId: number;
    // undefined
    areaId: number;
    // undefined
    productionLineId: number;
    // undefined
    processId: number;
    // undefined
    materialId: number;
    // undefined
    qmsInspectionCategoryId: number;
    // undefined
    materialCode: string;
    // undefined
    materialSpec: string;
    // undefined
    materialUnitId: number;
    // undefined
    lot: string;
    // undefined
    inspectionApplyQuantity: number;
    // undefined
    threeInspectionSystems: Record<string, any>[];
    // undefined
    selfInspectionEmployeeIds: number[];
    // undefined
    mutualInspectionEmployeeIds: number[];
    // undefined
    inspectionMethod: string;
    // undefined
    inspectionQuantity: number;
    // undefined
    selfQualifiedQuantity: number;
    // undefined
    selfUnQualifiedQuantity: number;
    // undefined
    selfInspectionResult: string;
    // undefined
    mutualQualifiedQuantity: number;
    // undefined
    mutualUnQualifiedQuantity: number;
    // undefined
    mutualInspectionResult: string;
    // undefined
    specialQualifiedQuantity: number;
    // undefined
    specialUnQualifiedQuantity: number;
    // undefined
    specialInspectionResult: string;
    // undefined
    applyInspectAddress: string;
    // undefined
    applyInspectDate: string;
    // undefined
    inspectionApplyFiles: string;
    // undefined
    edition: string;
    // undefined
    inspectionSchemeFiles: string;
    // undefined
    inspectionRecordFiles: string;
    // undefined
    inspectionResultDesc: string;
    // undefined
    qmsInspectionSchemeId: number;
    // undefined
    inspectionEmployeeIds: Record<string, any>[];
    // undefined
    inspectionEmployees: IAssociateFormDataVO[];
    // undefined
    isAssignment: string;
    // undefined
    inspectionEndDate: string;
    // undefined
    inspectionCompletedDate: string;
    // undefined
    taskStartDate: string;
    // undefined
    taskStatus: string;
    // undefined
    isOverdue: string;
    // undefined
    overdueDay: number;
    // undefined
    mutualRecords: IFirstCheckCheckTaskMutualCheckRecordResponseObject[];
    // undefined
    specialRecords: IFirstCheckCheckSpecialCheckRecordResponseObject[];
    // undefined
    selfRecords: IFirstCheckCheckSelfCheckRecordResponseObject[];
}
// 关联表单数据VO
export interface IAssociateFormDataVO {
    // id
    id: number;
    // 关联表单显示值
    showFieldValue: string;
    // 数据状态
    dataStatus: number;
    // 是否已删除显示字段
    isRemovedShowField: string;
    // 主数据ID
    masterDataId: number;
}
// 首检检验任务互检记录响应对象
export interface IFirstCheckCheckTaskMutualCheckRecordResponseObject {
    // id
    id: number;
    // undefined
    partNumber: string;
    // undefined
    inspectionResultsOfIndividualParts: string;
    // undefined
    descriptionOfNonconformities: string;
    // undefined
    qmsInspectionItemsId: number;
    // undefined
    inspectionStandardValue: string;
    // undefined
    inspectionActualValue: string;
    // undefined
    inspectionResult: string;
}
// 首检检验专检记录响应对象
export interface IFirstCheckCheckSpecialCheckRecordResponseObject {
    // undefined
    id: number;
    // undefined
    partNumber: string;
    // undefined
    inspectionResultsOfIndividualParts: string;
    // undefined
    descriptionOfNonconformities: string;
    // undefined
    qmsInspectionItemsId: number;
    // undefined
    inspectionStandardValue: string;
    // undefined
    inspectionActualValue: string;
    // undefined
    inspectionResult: string;
}
// 首检检验检验自检记录响应对象
export interface IFirstCheckCheckSelfCheckRecordResponseObject {
    // undefined
    id: number;
    // undefined
    partNumber: string;
    // undefined
    inspectionResultsOfIndividualParts: string;
    // undefined
    descriptionOfNonconformities: string;
    // undefined
    qmsInspectionItemsId: number;
    // undefined
    inspectionStandardValue: string;
    // undefined
    inspectionActualValue: string;
    // undefined
    inspectionResult: string;
}
