import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/质检管理/getPageUsingPOST_24
*/
export default function fetchMethod(options: { data: IInspectionTaskSearchesForVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultThePageInformationInspectionTaskReturnsVO>(
        {
            url: "/masterdata-service/qualityStorageTask/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 质检任务搜索VO */
export interface IInspectionTaskSearchesForVO {
    /** 检验位置id */
    checkPositionId?: string;
    /** 检验日期查询结束时间 */
    completeEndTime?: number;
    /** 检验日期查询开始时间 */
    completeStartTime?: number;
    /** 检验员id */
    handleUserId?: string;
    /** 物料id集 */
    materialIds?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 采购收货单编号 */
    purchaseWorkOrderNo?: string;
    /** 质检分类 */
    qualityInspectionCategoryId?: string;
    /** 任务编号 */
    qualityStorageTaskNo?: string;
    /** 仓位id */
    qualityWarehouseId?: string;
    /** 任务类型 */
    taskType?: EInspectionTaskSearchesForVO_taskType;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«质检任务返回VO»» */
export interface IJSONResultThePageInformationInspectionTaskReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IThePageInformationInspectionTaskReturnsVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«质检任务返回VO» */
export interface IThePageInformationInspectionTaskReturnsVO {
    /** 是否有下一页 */
    hasNextPage?: EThePageInformationInspectionTaskReturnsVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EThePageInformationInspectionTaskReturnsVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: ITheInspectionTaskReturnsVO[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** 质检任务返回VO */
export interface ITheInspectionTaskReturnsVO {
    /** 发起部门id */
    applyCombinationId?: string;
    /** 发起部门名称 */
    applyCombinationName?: string;
    /** 发起人id */
    applyUserId?: string;
    /** 发起人名称 */
    applyUsername?: string;
    /** 关闭人 */
    cancelUserId?: string;
    /** 关闭人名称 */
    cancelUserName?: string;
    /** 检验位置id */
    checkPositionId?: string;
    /** 检验位置名称 */
    checkPositionName?: string;
    /** 质检任务编号 */
    code?: string;
    /** 完成时间 */
    completeTime?: number;
    /** 创建日期 */
    createTime?: number;
    /** 质检处理人id */
    handleUserId?: string;
    /** 质检处理人名字 */
    handleUserName?: string;
    /** id */
    id?: string;
    /** 已检数 */
    inspectionQuantity?: number;
    /** 状态 */
    isValid?: ETheInspectionTaskReturnsVO_isValid;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料id */
    materialId?: string;
    /** 对应物料版次号 */
    materialIssueCode?: string;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料规格 */
    materialSpec?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 计划开始时间 */
    planBeginTime?: number;
    /** 质检分类编号 */
    qualityInspectionCategoryCode?: string;
    /** 质检分类id */
    qualityInspectionCategoryId?: string;
    /** 质检分类名称 */
    qualityInspectionCategoryName?: string;
    /** 质检方案id */
    qualityInspectionPlanId?: string;
    /** 质检方案名称 */
    qualityInspectionPlanName?: string;
    /** 质检仓位id */
    qualityWarehouseId?: string;
    /** 质检仓位名称 */
    qualityWarehouseName?: string;
    /** 任务状态 */
    status?: ETheInspectionTaskReturnsVO_status;
    /** 任务状态名称 */
    statusDesc?: string;
    /** 任务类型 */
    taskType?: ETheInspectionTaskReturnsVO_taskType;
    /** 任务类型描述 */
    taskTypeDesc?: string;
    /** 总质检数 */
    totalInspectionQuantity?: number;
    /** 待检数 */
    waitInspectionQuantity?: number;
}

export enum EInspectionTaskSearchesForVO_taskType {
    /** 入库质检任务 */
    STORAGE_IN_QUALITY_TASK = "STORAGE_IN_QUALITY_TASK",
    /** 存货质检任务 */
    STORAGE_QUALITY_TASK = "STORAGE_QUALITY_TASK"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EThePageInformationInspectionTaskReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePageInformationInspectionTaskReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheInspectionTaskReturnsVO_isValid {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheInspectionTaskReturnsVO_status {
    /** 待质检 */
    WAIT = "WAIT",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已撤销 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}

export enum ETheInspectionTaskReturnsVO_taskType {
    /** 入库质检任务 */
    STORAGE_IN_QUALITY_TASK = "STORAGE_IN_QUALITY_TASK",
    /** 存货质检任务 */
    STORAGE_QUALITY_TASK = "STORAGE_QUALITY_TASK"
}
