import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目报表相关/queryProjectTaskReportUsingPOST
*/
export default function fetchMethod(options: { data: QueryProjectTaskReport }, extraOptions?: any) {
    return http<IJSONResultPagingInformationProjectTaskReportResponseObject>(
        {
            url: "/masterdata-service/projectReport/queryProjectTaskReport",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«项目任务报表响应对象»» */
export interface IJSONResultPagingInformationProjectTaskReportResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationItemTaskReportResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«项目任务报表响应对象» */
export interface IPageInformationItemTaskReportResponseObject {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IProjectTaskReportResponseObject[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationItemTaskReportResponseObject_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationItemTaskReportResponseObject_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 项目任务报表响应对象 */
export interface IProjectTaskReportResponseObject {
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
    /** 项目id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目编号 */
    projectCode?: string;
    /** 项目类型id */
    projectTypeId?: string;
    /** 项目类型名称 */
    projectTypeName?: string;
    /** 优先级 */
    priorityName?: string;
    /** 项目大类 */
    projectCategory?: string;
    /** 项目大类名称 */
    projectCategoryName?: string;
    /** 项目经理名称 */
    projectManagerName?: string;
    /** 是否超期 */
    isOverdue?: EProjectTaskReportResponseObject_isOverdue;
    /** 超期天数(天) */
    overdueDay?: number;
    /** 状态 */
    status?: EProjectTaskReportResponseObject_status;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: string;
    /** undefined */
    projectManagerId?: string;
    /** 项目阶段名称 */
    projectStageName?: string;
    /** 任务类型 */
    projectTaskTypeName?: string;
    /** 任务状态 */
    taskStatus?: EProjectTaskReportResponseObject_taskStatus;
    /** 任务负责人名称 */
    leaderUserNameList?: string[];
    /** 任务开始日期 */
    planBeginTime?: number;
    /** 任务截止日期 */
    planEndTime?: number;
    /** 前置任务名称列表 */
    preTaskNameList?: string[];
    /** 上级任务名称 */
    parentName?: string;
    /** 任务完成时间 */
    actualEndTime?: number;
    /** 任务进度 */
    taskProgress?: number;
    /** undefined */
    parentId?: string;
    /** undefined */
    projectStageId?: string;
    /** undefined */
    projectTaskTypeId?: string;
    /** undefined */
    leaderUserIds?: Record<string, any>[];
    /** undefined */
    preTaskIds?: Record<string, any>[];
    /** undefined */
    priority?: string;
}

export enum EPageInformationItemTaskReportResponseObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationItemTaskReportResponseObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectTaskReportResponseObject_isOverdue {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectTaskReportResponseObject_status {
    /** 进行中 */
    HANDLING = "HANDLING",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 未通过 */
    NOT_PASS = "NOT_PASS",
    /** 暂存 */
    STAGING = "STAGING",
    /** 作废/停用 */
    INVALID = "INVALID"
}

export enum EProjectTaskReportResponseObject_taskStatus {
    /** 草稿 */
    DRAFT = "DRAFT",
    /** 未下发 */
    UN_ISSUE = "UN_ISSUE",
    /** 未接受 */
    UN_RECEIVE = "UN_RECEIVE",
    /** 未开始 */
    UN_START = "UN_START",
    /** 进行中 */
    HANDLING = "HANDLING",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 未通过 */
    NOT_PASS = "NOT_PASS",
    /** 已取消 */
    CANCEL = "CANCEL"
}
