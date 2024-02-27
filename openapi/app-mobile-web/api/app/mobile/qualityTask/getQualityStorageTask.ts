import { http } from "@/api/http";

/**
* @link http://47.108.139.107:17400/doc.html#/default/质检任务相关/getQualityStorageTaskUsingPOST
*/
export default function fetchMethod(options: { data: ITheInspectionTaskSearchesForVOOnTheEmployeeEnd }, extraOptions?: any) {
    return http<IJSONResultThePageInformationInspectionTaskReturnsVO>(
        {
            url: "/app-mobile-web/api/app/mobile/qualityTask/getQualityStorageTask",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 质检任务针对员工端搜索VO */
export interface ITheInspectionTaskSearchesForVOOnTheEmployeeEnd {
    /** 当前页面 */
    pageNo?: number;
    /** 任务状态 */
    statusList?: ETheInspectionTaskSearchesForVOOnTheEmployeeEnd_statusList_items[];
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 送检人id */
    createUserId?: string;
    /** 开始时间 yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 结束时间 yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 送检物料id */
    materialId?: string;
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IThePageInformationInspectionTaskReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«质检任务返回VO» */
export interface IThePageInformationInspectionTaskReturnsVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ITheInspectionTaskReturnsVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EThePageInformationInspectionTaskReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EThePageInformationInspectionTaskReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 质检任务返回VO */
export interface ITheInspectionTaskReturnsVO {
    /** id */
    id?: string;
    /** 发起部门id */
    applyCombinationId?: string;
    /** 发起部门名称 */
    applyCombinationName?: string;
    /** 发起人id */
    applyUserId?: string;
    /** 发起人名称 */
    applyUsername?: string;
    /** 质检任务编号 */
    code?: string;
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
    /** 质检仓位id */
    qualityWarehouseId?: string;
    /** 质检仓位名称 */
    qualityWarehouseName?: string;
    /** 质检处理人id */
    handleUserId?: string;
    /** 质检处理人名字 */
    handleUserName?: string;
    /** 状态 */
    isValid?: ETheInspectionTaskReturnsVO_isValid;
    /** 计划开始时间 */
    planBeginTime?: number;
    /** 任务状态 */
    status?: ETheInspectionTaskReturnsVO_status;
    /** 任务状态名称 */
    statusDesc?: string;
    /** 完成时间 */
    completeTime?: number;
    /** 任务类型 */
    taskType?: ETheInspectionTaskReturnsVO_taskType;
    /** 任务类型描述 */
    taskTypeDesc?: string;
    /** 检验位置id */
    checkPositionId?: string;
    /** 检验位置名称 */
    checkPositionName?: string;
    /** 总质检数 */
    totalInspectionQuantity?: number;
    /** 待检数 */
    waitInspectionQuantity?: number;
    /** 已检数 */
    inspectionQuantity?: number;
    /** 创建日期 */
    createTime?: number;
    /** 关闭人 */
    cancelUserId?: string;
    /** 关闭人名称 */
    cancelUserName?: string;
}

export enum ETheInspectionTaskSearchesForVOOnTheEmployeeEnd_statusList_items {
    WAIT = "WAIT",
    COMPLETE = "COMPLETE",
    CANCEL = "CANCEL",
    CLOSE = "CLOSE"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EThePageInformationInspectionTaskReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EThePageInformationInspectionTaskReturnsVO_hasNextPage {
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
