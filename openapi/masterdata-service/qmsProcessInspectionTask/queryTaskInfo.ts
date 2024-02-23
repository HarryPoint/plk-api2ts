import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/工序检验任务相关/queryTaskInfoUsingGET_1
export default function fetchMethod(params: { id: string }) {
    return http<IJSONResultProcessCheckTaskResponseObject>({
        url: "/masterdata-service/qmsProcessInspectionTask/queryTaskInfo",
        method: "get",
        params,
    });
}
// JSONResult«工序检检验任务响应对象»
export interface IJSONResultProcessCheckTaskResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcessCheckCheckTaskResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工序检检验任务响应对象
export interface IProcessCheckCheckTaskResponseObject {
    // id
    id: number;
    // 任务编号
    code: string;
    // 业务类型
    businessType: string;
    // 是否紧急
    isEmergent: string;
    // 是否临检
    isTemporarily: string;
    // 报检单物料明细id
    qmsInspectionApplyFormMaterialDetailId: number;
    // 报检日期
    applyDate: string;
    // 报检员
    applyEmployeeId: number;
    // 报检部门
    applyDepartmentId: number;
    // 区域id
    areaId: number;
    // 产线id
    productionLineId: number;
    // 工序id
    processId: number;
    // 物料名称
    materialId: number;
    // 物料检验类别
    qmsInspectionCategoryId: number;
    // 对应物料code
    materialCode: string;
    // 对应物料规格
    materialSpec: string;
    // 对应物料单位
    materialUnitId: number;
    // 批次
    lot: string;
    // 报检数量
    inspectionApplyQuantity: number;
    // 三检制选择
    threeInspectionSystems: Record<string, any>[];
    // 自检员
    selfInspectionEmployeeIds: number[];
    // 互检员
    mutualInspectionEmployeeIds: number[];
    // 检验方式
    inspectionMethod: string;
    // 检验数量
    inspectionQuantity: number;
    // 自检合格数
    selfQualifiedQuantity: number;
    // 自检不合格数
    selfUnQualifiedQuantity: number;
    // 自检检验结果
    selfInspectionResult: string;
    // 互检合格数
    mutualQualifiedQuantity: number;
    // 互检不合格数
    mutualUnQualifiedQuantity: number;
    // 互检检验结果
    mutualInspectionResult: string;
    // 专检合格数
    specialQualifiedQuantity: number;
    // 专检不合格数
    specialUnQualifiedQuantity: number;
    // 专检检验结果
    specialInspectionResult: string;
    // 申请验收地点
    applyInspectAddress: string;
    // 申请验收日期
    applyInspectDate: string;
    // 报检附件
    inspectionApplyFiles: string;
    // 版次
    edition: string;
    // 方案附件
    inspectionSchemeFiles: string;
    // 检验记录附件
    inspectionRecordFiles: string;
    // 检验结果描述
    inspectionResultDesc: string;
    // 检验方案id
    qmsInspectionSchemeId: number;
    // 检验员
    inspectionEmployeeIds: Record<string, any>[];
    // 检验员
    inspectionEmployees: IAssociateFormDataVO[];
    // 分配状态
    isAssignment: string;
    // 检验截止日期
    inspectionEndDate: string;
    // 检验完成日期
    inspectionCompletedDate: string;
    // 开始时间
    taskStartDate: string;
    // 任务执行状态
    taskStatus: string;
    // 是否超期
    isOverdue: string;
    // 超期天数
    overdueDay: number;
    // 互检记录
    mutualRecords: IProcessCheckCheckTaskMutualCheckRecordResponseObject[];
    // 专检记录
    selfRecords: IFirstCheckSelfCheckRecordResponseObject[];
    // 自检记录
    specialRecords: IProcessInspectionInspectionSpecialInspectionRecordResponseObject[];
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
// 工序检检验任务互检记录响应对象
export interface IProcessCheckCheckTaskMutualCheckRecordResponseObject {
    // id
    id: number;
    // 零件号
    partNumber: string;
    // 零件检验结果
    inspectionResultsOfIndividualParts: string;
    // 不合格情况描述
    descriptionOfNonconformities: string;
    // 检验项id
    qmsInspectionItemsId: number;
    // 标准值
    inspectionStandardValue: string;
    // 实测值
    inspectionActualValue: string;
    // 检验结果
    inspectionResult: string;
}
// 首检自检记录响应对象
export interface IFirstCheckSelfCheckRecordResponseObject {
    // id
    id: number;
    // 零件号
    partNumber: string;
    // 零件检验结果
    inspectionResultsOfIndividualParts: string;
    // 不合格情况描述
    descriptionOfNonconformities: string;
    // 检验项id
    qmsInspectionItemsId: number;
    // 标准值
    inspectionStandardValue: string;
    // 实测值
    inspectionActualValue: string;
    // 检验结果
    inspectionResult: string;
}
// 工序检检验专检记录响应对象
export interface IProcessInspectionInspectionSpecialInspectionRecordResponseObject {
    // id
    id: number;
    // 零件号
    partNumber: string;
    // 零件检验结果
    inspectionResultsOfIndividualParts: string;
    // 不合格情况描述
    descriptionOfNonconformities: string;
    // 检验项id
    qmsInspectionItemsId: number;
    // 标准值
    inspectionStandardValue: string;
    // 实测值
    inspectionActualValue: string;
    // 检验结果
    inspectionResult: string;
}
