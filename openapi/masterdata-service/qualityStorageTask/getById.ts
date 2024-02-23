import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/质检管理/getByIdUsingGET_15
export default function fetchMethod(params: { enterpriseId: number; id: number }) {
    return get<IJSONResultInspectionTaskDetailsAreReturnedToVO['data']>({
      url: "/masterdata-service/qualityStorageTask/getById",
      params,
    });
}
// JSONResult«质检任务明细返回VO»
export interface IJSONResultInspectionTaskDetailsAreReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ICheckTaskDetailsAreReturnedToVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 质检任务明细返回VO
export interface ICheckTaskDetailsAreReturnedToVO {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 任务号
    taskNo: string;
    // 质检任务类型
    type: string;
    // 对应物料id
    materialId: number;
    // 对应物料名称
    materialName: string;
    // 对应物料编号
    materialCode: string;
    // 对应物料版次号
    materialIssueCode: string;
    // 对应物料单位
    materialUnit: string;
    // 对应物料规格
    materialSpec: string;
    // 质检分类id
    qualityInspectionCategoryId: number;
    // 质检分类名称
    qualityInspectionCategoryName: string;
    // 质检分类编号
    qualityInspectionCategoryCode: string;
    // 质检方案id
    qualityInspectionPlanId: number;
    // 质检方案名称
    qualityInspectionPlanName: string;
    // 质检仓位id
    qualityWarehouseId: number;
    // 质检仓位名称
    qualityWarehouseName: string;
    // 质检处理人
    handleUserId: number;
    // 质检处理人名称
    handleUserName: string;
    // 计划开始时间
    planBeginTime: string;
    // 总质检数
    totalInspectionQuantity: number;
    // 待检数
    waitInspectionQuantity: number;
    // 已检数
    inspectionQuantity: number;
    // 合格数
    passQuantity: number;
    // 不合格数
    notPassQuantity: number;
    // 让步接收数
    concessionQuantity: number;
    // 完成时间
    completeTime: string;
    // 备注
    remark: string;
    // 状态
    status: string;
    // 任务状态名称
    statusDesc: string;
    // 关闭人
    cancelUserId: number;
    // 关闭人名称
    cancelUserName: string;
    // 取消时间
    cancelTime: string;
    // 质检方案质检项填写信息
    planItemInput: IQualityInspectionTaskQualityInspectionSolutionQualityInspectionItemReturnToVO;
    // 质检任务关闭信息 - 状态是已关闭（已撤销）时有值
    closeInfo: ITheInspectionTaskShutdownInformationIsReturnedToVO;
    // 质检结果明细 - 状态是已完成时有值
    planItemResults: ICheckItemDetailsAreReturnedToVO[];
    // 任务类型
    taskType: string;
    // 任务类型名称
    taskTypeDesc: string;
    // 检验位置id
    checkPositionId: number;
    // 检验位置名称
    checkPositionName: string;
    // 发起部门id
    applyCombinationId: number;
    // 发起部门名称
    applyCombinationName: string;
    // 发起人id
    applyUserId: number;
    // 发起人名称
    applyUsername: string;
}
// 质检任务质检方案质检项填写返回VO
export interface IQualityInspectionTaskQualityInspectionSolutionQualityInspectionItemReturnToVO {
    // 质检方案集
    plans: IInspectionTaskInspectionSolutionReturnToVO[];
    // 质检项集
    items: IInspectionTaskTheInspectionItemIsReturnedToVO[];
}
// 质检任务质检方案返回VO
export interface IInspectionTaskInspectionSolutionReturnToVO {
    // 质检方案id
    id: number;
    // 质检方案名称
    name: string;
    // 质检方案编号
    code: string;
    // 质检分类id
    qualityInspectionCategoryId: number;
    // 质检分类名称
    qualityInspectionCategoryName: string;
    // 质检分类编号
    qualityInspectionCategoryCode: string;
    // 版次号
    issueCode: string;
    // 备注
    remark: string;
    // 附件文件id
    attachedFileId: number;
    // 附件文件key
    attachedFileKey: string;
    // 附件文件完整路径
    attachedFileUrl: string;
    // 附件文件名
    attachedFileName: string;
}
// 质检任务质检项返回VO
export interface IInspectionTaskTheInspectionItemIsReturnedToVO {
    // 质检方案质检项关联id
    qualityInspectionPlanItemRpId: number;
    // 质检方案id
    qualityInspectionPlanId: number;
    // 质检项id
    qualityInspectionItemId: number;
    // 质检项名称
    qualityInspectionItemName: string;
    // 质检项编号
    qualityInspectionItemCode: string;
    // 质检项备注
    qualityInspectionItemRemark: string;
    // 质检项附件文件id
    qualityInspectionItemAttachedFileId: number;
    // 质检项附件文件key
    qualityInspectionItemAttachedFileKey: string;
    // 质检项附件文件完整路径
    qualityInspectionItemAttachedFileUrl: string;
    // 质检项附件文件名
    qualityInspectionItemAttachedFileName: string;
    // 质检方式
    qualityMethod: string;
    // 选择方式
    selectType: string;
    // 选择项
    selectorList: ITheInspectionItemOptionReturnsVO[];
    // 数值质检标准
    numberStandard: string;
    // 数值质检标准描述
    numberStandardDesc: string;
    // 比较数值
    compareNumber: number;
    // 下限
    lowerLimit: number;
    // 上限
    upperLimit: number;
    // 数值单位
    numberUnit: string;
    // 质检标准说明
    standardDesc: string;
}
// 质检项选择项返回VO
export interface ITheInspectionItemOptionReturnsVO {
    // 选择项名称
    name: string;
}
// 质检任务关闭信息返回VO
export interface ITheInspectionTaskShutdownInformationIsReturnedToVO {
    // 所属质检任务id
    qualityStorageTaskId: number;
    // 关闭时间
    handleTime: string;
    // 关闭处理人
    handleUserId: number;
    // 关闭处理人姓名
    handleUsername: string;
    // 关闭处理人工号
    handleUserCode: string;
    // 关闭处理意见
    handleRemark: string;
}
// 质检任务质检物料明细返回VO
export interface ICheckItemDetailsAreReturnedToVO {
    // 质检任务质检物料明细id
    id: number;
    // 质检结果类型
    qualityInspectionResultType: string;
    // 质检结果类型名称
    qualityInspectionResultTypeName: string;
    // 质检项集
    qualityTaskMaterialItems: IQcTaskQCMaterialQCItemDetailsVO[];
}
// 质检任务质检物料质检项明细VO
export interface IQcTaskQCMaterialQCItemDetailsVO {
    // 质检方案质检项关联id
    qualityInspectionPlanItemRpId: number;
    // 质检方式
    qualityMethod: string;
    // 数值质检标准
    numberStandard: string;
    // 比较数值
    compareNumber: number;
    // 下限
    lowerLimit: number;
    // 上限
    upperLimit: number;
    // 数值单位
    numberUnit: string;
    // 质检项id
    qualityInspectionItemId: number;
    // 质检项名称
    qualityInspectionItemName: string;
    // 质检项编号
    qualityInspectionItemCode: string;
    // 质检值
    qualityInspectionValues: string;
}
