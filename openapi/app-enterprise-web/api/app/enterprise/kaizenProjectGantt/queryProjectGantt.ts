import { http } from "@/api/http";

/**
* @author TanPeng
* @link http://47.108.135.148:16400/doc.html#/default/项目甘特图相关/queryProjectGanttUsingPOST
*/
export default function fetchMethod(options: { data: IProjectGanttChartQueryObject }, extraOptions?: any) {
    return http<IJSONResultListProjectGanttChartResponseObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/kaizenProjectGantt/queryProjectGantt",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目甘特图查询对象 */
export interface IProjectGanttChartQueryObject {
    /** 项目名称 */
    projectName?: string;
    /** 项目任务名称 */
    projectTaskName?: string;
    /** 项目类型集合 */
    projectTypeList?: string[];
    /** 任务优先级集合 */
    priorityList?: EProjectGanttChartQueryObject_priorityList_items[];
    /** 项目状态集合 */
    projectStatusList?: EProjectGanttChartQueryObject_projectStatusList_items[];
    /** 任务状态 */
    projectTaskStatusList?: EProjectGanttChartQueryObject_projectTaskStatusList_items[];
    /** 项目负责人id集合 */
    projectLeaderIdList?: string[];
    /** 任务执行人id集合 */
    projectTaskLeaderIdList?: string[];
    /** 项目查询开始日期 */
    projectStartDate?: number;
    /** 项目查询截止日期 */
    projectEndDate?: number;
    /** 项目任务查询开始日期 */
    projectTaskStartDate?: number;
    /** 项目任务查询截止日期 */
    projectTaskEndDate?: number;
    /** 项目id集合 */
    projectIdList?: string[];
}
/** JSONResult«List«项目甘特图响应对象»» */
export interface IJSONResultListProjectGanttChartResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectGanttChartResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目甘特图响应对象 */
export interface IProjectGanttChartResponseObject {
    /** 项目id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目状态 */
    projectStatus?: EProjectGanttChartResponseObject_projectStatus;
    /** 项目状态描述 */
    projectStatusDesc?: string;
    /** 项目负责人id */
    projectLeaderId?: string;
    /** 项目负责人名称 */
    projectLeaderName?: string;
    /** 项目类型 */
    projectType?: string;
    /** 项目类型描述 */
    projectTypeDesc?: string;
    /** 开始日期 */
    projectStartDate?: number;
    /** 截止日期 */
    projectEndDate?: number;
    /** 项目任务列表 */
    projectTaskGanttList?: IProjectTaskGanttChartResponseObject[];
}
/** 项目任务甘特图响应对象 */
export interface IProjectTaskGanttChartResponseObject {
    /** 项目任务id */
    projectTaskId?: string;
    /** 上级任务id */
    parentId?: string;
    /** 项目任务名称 */
    projectTaskName?: string;
    /** 项目任务优先级 */
    priority?: EProjectTaskGanttChartResponseObject_priority;
    /** 项目任务优先级描述 */
    priorityDesc?: string;
    /** 项目任务状态 */
    projectTaskStatus?: EProjectTaskGanttChartResponseObject_projectTaskStatus;
    /** 项目任务状态描述 */
    projectTaskStatusDesc?: string;
    /** 项目任务执行人id */
    projectTaskLeaderUserId?: string;
    /** 项目任务执行人名称 */
    projectTaskLeaderUserName?: string;
    /** 项目任务开始日期 */
    beginTime?: number;
    /** 项目任务截止日期 */
    endTime?: number;
}

export enum EProjectGanttChartQueryObject_priorityList_items {
    LOW = "LOW",
    NORMAL = "NORMAL",
    EMERGENCY = "EMERGENCY",
    EXTREME_EMERGENCY = "EXTREME_EMERGENCY"
}

export enum EProjectGanttChartQueryObject_projectStatusList_items {
    DRAFT = "DRAFT",
    IN_PROGRESS = "IN_PROGRESS",
    COMPLETED = "COMPLETED",
    CANCELED = "CANCELED"
}

export enum EProjectGanttChartQueryObject_projectTaskStatusList_items {
    WAIT = "WAIT",
    HANDLING = "HANDLING",
    COMPLETE = "COMPLETE",
    CANCELED = "CANCELED"
}

export enum EProjectGanttChartResponseObject_projectStatus {
    /** 草稿 */
    DRAFT = "DRAFT",
    /** 进行中 */
    IN_PROGRESS = "IN_PROGRESS",
    /** 已完成 */
    COMPLETED = "COMPLETED",
    /** 已取消 */
    CANCELED = "CANCELED"
}

export enum EProjectTaskGanttChartResponseObject_priority {
    /** 较低 */
    LOW = "LOW",
    /** 普通 */
    NORMAL = "NORMAL",
    /** 紧急 */
    EMERGENCY = "EMERGENCY",
    /** 非常紧急 */
    EXTREME_EMERGENCY = "EXTREME_EMERGENCY"
}

export enum EProjectTaskGanttChartResponseObject_projectTaskStatus {
    /** 未开始 */
    WAIT = "WAIT",
    /** 进行中 */
    HANDLING = "HANDLING",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已取消 */
    CANCELED = "CANCELED"
}
