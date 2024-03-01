import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产质检管理/getQualityTaskPageForStaffUsingPOST
*/
export default function fetchMethod(options: { data: ITheInspectionTaskSearchesForVOOnTheEmployeeEnd, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationTheInspectionTaskReturnsVOForTheEmployee>(
        {
            url: "/masterdata-service/qualityProduceTask/getQualityTaskPageForStaff",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 质检任务针对员工端搜索VO */
export interface ITheInspectionTaskSearchesForVOOnTheEmployeeEnd {
    /** 开始时间 yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 送检人id */
    createUserId?: string;
    /** 结束时间 yyyy-MM-dd HH:mm:ss */
    endTime?: string;
    /** 送检物料id */
    materialId?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 工序id */
    processId?: string;
    /** 任务状态 */
    statusList?: ETheInspectionTaskSearchesForVOOnTheEmployeeEnd_statusList_items[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«质检任务针对员工返回VO»» */
export interface IJSONResultPagingInformationTheInspectionTaskReturnsVOForTheEmployee {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationTheInspectionTaskReturnsVOForTheEmployee;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«质检任务针对员工返回VO» */
export interface IPagingInformationTheInspectionTaskReturnsVOForTheEmployee {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationTheInspectionTaskReturnsVOForTheEmployee_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationTheInspectionTaskReturnsVOForTheEmployee_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: ITheInspectionTaskIsReturnedToVOForTheEmployee[];
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
/** 质检任务针对员工返回VO */
export interface ITheInspectionTaskIsReturnedToVOForTheEmployee {
    /** 送检时间 */
    createTime?: number;
    /** 送检人工号 */
    createUserCode?: string;
    /** 送检人id */
    createUserId?: string;
    /** 送检人姓名 */
    createUsername?: string;
    /** id */
    id?: string;
    /** 已检数 */
    inspectionQuantity?: number;
    /** 对应物料编号 */
    materialCode?: string;
    /** 对应物料id */
    materialId?: string;
    /** 对应物料版次号 */
    materialIssueCode?: string;
    /** 对应物料名称 */
    materialName?: string;
    /** 对应物料单位 */
    materialUnit?: string;
    /** 对应工序编号 */
    processCode?: string;
    /** 对应工序id */
    processId?: string;
    /** 对应工序名称 */
    processName?: string;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 生产订单id */
    produceOrderId?: string;
    /** 所属生产任务id */
    produceTaskId?: string;
    /** 所属生产任务号 */
    produceTaskNo?: string;
    /** 对应工艺路径步骤id */
    routingStepId?: string;
    /** 状态 */
    status?: ETheInspectionTaskIsReturnedToVOForTheEmployee_status;
    /** 状态描述 */
    statusDesc?: string;
    /** 任务号 */
    taskNo?: string;
    /** 总质检数 */
    totalInspectionQuantity?: number;
    /** 待检数 */
    waitInspectionQuantity?: number;
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

export enum EPagingInformationTheInspectionTaskReturnsVOForTheEmployee_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationTheInspectionTaskReturnsVOForTheEmployee_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheInspectionTaskIsReturnedToVOForTheEmployee_status {
    /** 待质检 */
    WAIT = "WAIT",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已撤销 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE"
}
