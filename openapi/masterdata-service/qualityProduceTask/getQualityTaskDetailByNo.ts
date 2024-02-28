import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产质检管理/getQualityTaskDetailByNoUsingGET
*/
export default function fetchMethod(options: { params: { taskNo?: string; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultInspectionTaskDetailsAreReturnedToVOForEmployees>(
        {
            url: "/masterdata-service/qualityProduceTask/getQualityTaskDetailByNo",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«质检任务明细针对员工返回VO» */
export interface IJSONResultInspectionTaskDetailsAreReturnedToVOForEmployees {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ICheckTaskDetailsAreReturnedToVOForEmployees;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 质检任务明细针对员工返回VO */
export interface ICheckTaskDetailsAreReturnedToVOForEmployees {
    /** id */
    id?: string;
    /** 任务号 */
    taskNo?: string;
    /** 所属生产任务id */
    produceTaskId?: string;
    /** 所属生产任务号 */
    produceTaskNo?: string;
    /** 对应生产处理id */
    produceHandleId?: string;
    /** 生产订单id */
    produceOrderId?: string;
    /** 生产订单号 */
    produceOrderCode?: string;
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
    /** 对应工艺路径步骤id */
    routingStepId?: string;
    /** 对应工序id */
    processId?: string;
    /** 对应工序名称 */
    processName?: string;
    /** 对应工序编号 */
    processCode?: string;
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
    /** 实际质检开始时间 */
    actualBeginTime?: number;
    /** 实际质检结束时间 */
    actualEndTime?: number;
    /** 状态 */
    status?: ECheckTaskDetailsAreReturnedToVOForEmployees_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 送检人id */
    createUserId?: string;
    /** 送检人姓名 */
    createUsername?: string;
    /** 送检人工号 */
    createUserCode?: string;
    /** 送检时间 */
    createTime?: number;
    /** 质检方案质检项填写信息 */
    planItemInput?: IQualityInspectionTaskQualityInspectionSolutionQualityInspectionItemReturnToVO;
    /** 质检任务撤销信息 - 状态是已撤销时有值 */
    cancelInfo?: ITheQualityInspectionTaskCancellationInformationIsReturnedToVO;
    /** 质检结果明细 - 状态是已完成时有值 */
    planItemResults?: ICheckItemDetailsAreReturnedToVO[];
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
/** 质检任务撤销信息返回VO */
export interface ITheQualityInspectionTaskCancellationInformationIsReturnedToVO {
    /** 所属生产处理id */
    produceHandleId?: string;
    /** 撤销时间 */
    handleTime?: number;
    /** 撤销处理人 */
    handleUserId?: string;
    /** 撤销处理人姓名 */
    handleUsername?: string;
    /** 撤销处理人工号 */
    handleUserCode?: string;
    /** 撤销处理意见 */
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

export enum ECheckTaskDetailsAreReturnedToVOForEmployees_status {
    /** 待质检 */
    WAIT = "WAIT",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已撤销 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
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
