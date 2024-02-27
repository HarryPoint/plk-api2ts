import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/质检管理/getByIdUsingGET_17
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultInspectionTaskDetailsAreReturnedToVO>(
        {
            url: "/masterdata-service/qualityStorageTask/getById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«质检任务明细返回VO» */
export interface IJSONResultInspectionTaskDetailsAreReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ICheckTaskDetailsAreReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 质检任务明细返回VO */
export interface ICheckTaskDetailsAreReturnedToVO {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 任务号 */
    taskNo?: string;
    /** 质检任务类型 */
    type?: ECheckTaskDetailsAreReturnedToVO_type;
    /** 对应物料id */
    materialId?: string;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料版次号 */
    materialIssueCode?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 对应物料规格 */
    materialSpec?: string;
    /** 质检分类id */
    qualityInspectionCategoryId?: string;
    /** 质检分类名称 */
    qualityInspectionCategoryName?: string;
    /** 质检分类编号 */
    qualityInspectionCategoryCode?: string;
    /** 质检方案id */
    qualityInspectionPlanId?: string;
    /** 质检方案名称 */
    qualityInspectionPlanName?: string;
    /** 质检仓位id */
    qualityWarehouseId?: string;
    /** 质检仓位名称 */
    qualityWarehouseName?: string;
    /** 质检处理人 */
    handleUserId?: string;
    /** 质检处理人名称 */
    handleUserName?: string;
    /** 计划开始时间 */
    planBeginTime?: number;
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
    completeTime?: number;
    /** 备注 */
    remark?: string;
    /** 状态 */
    status?: ECheckTaskDetailsAreReturnedToVO_status;
    /** 任务状态名称 */
    statusDesc?: string;
    /** 关闭人 */
    cancelUserId?: string;
    /** 关闭人名称 */
    cancelUserName?: string;
    /** 取消时间 */
    cancelTime?: number;
    /** 质检方案质检项填写信息 */
    planItemInput?: IQualityInspectionTaskQualityInspectionSolutionQualityInspectionItemReturnToVO;
    /** 质检任务关闭信息 - 状态是已关闭（已撤销）时有值 */
    closeInfo?: ITheInspectionTaskShutdownInformationIsReturnedToVO;
    /** 质检结果明细 - 状态是已完成时有值 */
    planItemResults?: ICheckItemDetailsAreReturnedToVO[];
    /** 任务类型 */
    taskType?: ECheckTaskDetailsAreReturnedToVO_taskType;
    /** 任务类型名称 */
    taskTypeDesc?: string;
    /** 检验位置id */
    checkPositionId?: string;
    /** 检验位置名称 */
    checkPositionName?: string;
    /** 发起部门id */
    applyCombinationId?: string;
    /** 发起部门名称 */
    applyCombinationName?: string;
    /** 发起人id */
    applyUserId?: string;
    /** 发起人名称 */
    applyUsername?: string;
}
/** 质检任务质检方案质检项填写返回VO */
export interface IQualityInspectionTaskQualityInspectionSolutionQualityInspectionItemReturnToVO {
    /** 质检方案集 */
    plans?: IInspectionTaskInspectionSolutionReturnToVO[];
    /** 质检项集 */
    items?: IInspectionTaskTheInspectionItemIsReturnedToVO[];
}
/** 质检任务质检方案返回VO */
export interface IInspectionTaskInspectionSolutionReturnToVO {
    /** 质检方案id */
    id?: string;
    /** 质检方案名称 */
    name?: string;
    /** 质检方案编号 */
    code?: string;
    /** 质检分类id */
    qualityInspectionCategoryId?: string;
    /** 质检分类名称 */
    qualityInspectionCategoryName?: string;
    /** 质检分类编号 */
    qualityInspectionCategoryCode?: string;
    /** 版次号 */
    issueCode?: string;
    /** 备注 */
    remark?: string;
    /** 附件文件id */
    attachedFileId?: string;
    /** 附件文件key */
    attachedFileKey?: string;
    /** 附件文件完整路径 */
    attachedFileUrl?: string;
    /** 附件文件名 */
    attachedFileName?: string;
}
/** 质检任务质检项返回VO */
export interface IInspectionTaskTheInspectionItemIsReturnedToVO {
    /** 质检方案质检项关联id */
    qualityInspectionPlanItemRpId?: string;
    /** 质检方案id */
    qualityInspectionPlanId?: string;
    /** 质检项id */
    qualityInspectionItemId?: string;
    /** 质检项名称 */
    qualityInspectionItemName?: string;
    /** 质检项编号 */
    qualityInspectionItemCode?: string;
    /** 质检项备注 */
    qualityInspectionItemRemark?: string;
    /** 质检项附件文件id */
    qualityInspectionItemAttachedFileId?: string;
    /** 质检项附件文件key */
    qualityInspectionItemAttachedFileKey?: string;
    /** 质检项附件文件完整路径 */
    qualityInspectionItemAttachedFileUrl?: string;
    /** 质检项附件文件名 */
    qualityInspectionItemAttachedFileName?: string;
    /** 质检方式 */
    qualityMethod?: EInspectionTaskTheInspectionItemIsReturnedToVO_qualityMethod;
    /** 选择方式 */
    selectType?: EInspectionTaskTheInspectionItemIsReturnedToVO_selectType;
    /** 选择项 */
    selectorList?: ITheInspectionItemOptionReturnsVO[];
    /** 数值质检标准 */
    numberStandard?: EInspectionTaskTheInspectionItemIsReturnedToVO_numberStandard;
    /** 数值质检标准描述 */
    numberStandardDesc?: string;
    /** 比较数值 */
    compareNumber?: number;
    /** 下限 */
    lowerLimit?: number;
    /** 上限 */
    upperLimit?: number;
    /** 数值单位 */
    numberUnit?: string;
    /** 质检标准说明 */
    standardDesc?: string;
}
/** 质检项选择项返回VO */
export interface ITheInspectionItemOptionReturnsVO {
    /** 选择项名称 */
    name?: string;
}
/** 质检任务关闭信息返回VO */
export interface ITheInspectionTaskShutdownInformationIsReturnedToVO {
    /** 所属质检任务id */
    qualityStorageTaskId?: string;
    /** 关闭时间 */
    handleTime?: number;
    /** 关闭处理人 */
    handleUserId?: string;
    /** 关闭处理人姓名 */
    handleUsername?: string;
    /** 关闭处理人工号 */
    handleUserCode?: string;
    /** 关闭处理意见 */
    handleRemark?: string;
}
/** 质检任务质检物料明细返回VO */
export interface ICheckItemDetailsAreReturnedToVO {
    /** 质检任务质检物料明细id */
    id?: string;
    /** 质检结果类型 */
    qualityInspectionResultType?: ECheckItemDetailsAreReturnedToVO_qualityInspectionResultType;
    /** 质检结果类型名称 */
    qualityInspectionResultTypeName?: string;
    /** 质检项集 */
    qualityTaskMaterialItems?: IQcTaskQCMaterialQCItemDetailsVO[];
}
/** 质检任务质检物料质检项明细VO */
export interface IQcTaskQCMaterialQCItemDetailsVO {
    /** 质检方案质检项关联id */
    qualityInspectionPlanItemRpId?: string;
    /** 质检方式 */
    qualityMethod?: EQcTaskQCMaterialQCItemDetailsVO_qualityMethod;
    /** 数值质检标准 */
    numberStandard?: EQcTaskQCMaterialQCItemDetailsVO_numberStandard;
    /** 比较数值 */
    compareNumber?: number;
    /** 下限 */
    lowerLimit?: number;
    /** 上限 */
    upperLimit?: number;
    /** 数值单位 */
    numberUnit?: string;
    /** 质检项id */
    qualityInspectionItemId?: string;
    /** 质检项名称 */
    qualityInspectionItemName?: string;
    /** 质检项编号 */
    qualityInspectionItemCode?: string;
    /** 质检值 */
    qualityInspectionValues?: string;
}

export enum ECheckTaskDetailsAreReturnedToVO_type {
    /** 全检 */
    ALL = "ALL",
    /** 比例抽检 */
    RADIO_SPOT_CHECK = "RADIO_SPOT_CHECK",
    /** 固定抽检 */
    FIX_SPOT_CHECK = "FIX_SPOT_CHECK"
}

export enum ECheckTaskDetailsAreReturnedToVO_status {
    /** 待质检 */
    WAIT = "WAIT",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已撤销 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}

export enum ECheckTaskDetailsAreReturnedToVO_taskType {
    /** 入库质检任务 */
    STORAGE_IN_QUALITY_TASK = "STORAGE_IN_QUALITY_TASK",
    /** 存货质检任务 */
    STORAGE_QUALITY_TASK = "STORAGE_QUALITY_TASK"
}

export enum EInspectionTaskTheInspectionItemIsReturnedToVO_qualityMethod {
    /** 数值比对 */
    NUMBER_COMPARE = "NUMBER_COMPARE",
    /** 人工判断 */
    ARTIFICIAL = "ARTIFICIAL"
}

export enum EInspectionTaskTheInspectionItemIsReturnedToVO_selectType {
    /** 单选 */
    SELECTOR = "SELECTOR",
    /** 多选 */
    CHECKBOX = "CHECKBOX"
}

export enum EInspectionTaskTheInspectionItemIsReturnedToVO_numberStandard {
    /** 数值区间 */
    BETWEEN = "BETWEEN",
    /** 数值大于 */
    GT = "GT",
    /** 数值大于等于 */
    GE = "GE",
    /** 数值小于 */
    LT = "LT",
    /** 数值小于等于 */
    LE = "LE"
}

export enum ECheckItemDetailsAreReturnedToVO_qualityInspectionResultType {
    /** 合格 */
    PASS = "PASS",
    /** 不合格 */
    NOT_PASS = "NOT_PASS",
    /** 让步接收 */
    CONCESSION = "CONCESSION"
}

export enum EQcTaskQCMaterialQCItemDetailsVO_qualityMethod {
    /** 数值比对 */
    NUMBER_COMPARE = "NUMBER_COMPARE",
    /** 人工判断 */
    ARTIFICIAL = "ARTIFICIAL"
}

export enum EQcTaskQCMaterialQCItemDetailsVO_numberStandard {
    /** 数值区间 */
    BETWEEN = "BETWEEN",
    /** 数值大于 */
    GT = "GT",
    /** 数值大于等于 */
    GE = "GE",
    /** 数值小于 */
    LT = "LT",
    /** 数值小于等于 */
    LE = "LE"
}
