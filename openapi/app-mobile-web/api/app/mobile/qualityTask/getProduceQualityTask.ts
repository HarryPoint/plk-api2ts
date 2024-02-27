import { http } from "@/api/http";

/**
* @link http://47.108.139.107:17400/doc.html#/default/质检任务相关/getProduceQualityTaskUsingPOST
*/
export default function fetchMethod(options: { data: ITheInspectionTaskSearchesForVO1OnTheEmployee }, extraOptions?: any) {
    return http<IJSONResultPagingInformationTheInspectionTaskReturnsVOForTheEmployee>(
        {
            url: "/app-mobile-web/api/app/mobile/qualityTask/getProduceQualityTask",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 质检任务针对员工端搜索VO_1 */
export interface ITheInspectionTaskSearchesForVO1OnTheEmployee {
    /** 当前页面 */
    pageNo?: number;
    /** 任务状态 */
    statusList?: ETheInspectionTaskSearchesForVO1OnTheEmployee_statusList_items[];
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 工序id */
    processId?: string;
    /** 开始时间 yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 送检人id */
    createUserId?: string;
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
/** JSONResult«分页信息«质检任务针对员工返回VO»» */
export interface IJSONResultPagingInformationTheInspectionTaskReturnsVOForTheEmployee {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationTheInspectionTaskReturnsVOForTheEmployee;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«质检任务针对员工返回VO» */
export interface IPagingInformationTheInspectionTaskReturnsVOForTheEmployee {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ITheInspectionTaskIsReturnedToVOForTheEmployee[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationTheInspectionTaskReturnsVOForTheEmployee_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationTheInspectionTaskReturnsVOForTheEmployee_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 质检任务针对员工返回VO */
export interface ITheInspectionTaskIsReturnedToVOForTheEmployee {
    /** id */
    id?: string;
    /** 任务号 */
    taskNo?: string;
    /** 所属生产任务id */
    produceTaskId?: string;
    /** 所属生产任务号 */
    produceTaskNo?: string;
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
    /** 状态 */
    status?: ETheInspectionTaskIsReturnedToVOForTheEmployee_status;
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
}

export enum ETheInspectionTaskSearchesForVO1OnTheEmployee_statusList_items {
    WAIT = "WAIT",
    COMPLETE = "COMPLETE",
    CANCEL = "CANCEL",
    CLOSE = "CLOSE"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationTheInspectionTaskReturnsVOForTheEmployee_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationTheInspectionTaskReturnsVOForTheEmployee_hasNextPage {
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
