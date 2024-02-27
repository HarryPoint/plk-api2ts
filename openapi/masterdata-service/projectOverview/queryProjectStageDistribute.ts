import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目概况相关/queryProjectStageDistributeUsingPOST
*/
export default function fetchMethod(options: { data: IProjectOverviewQueryDto }, extraOptions?: any) {
    return http<IJSONResultListProjectPhaseDistributesResponseObjects>(
        {
            url: "/masterdata-service/projectOverview/queryProjectStageDistribute",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 项目概况查询dto */
export interface IProjectOverviewQueryDto {
    /** 项目id */
    projectId: string;
    /** 开始日期 */
    beginTime?: number;
    /** 结束日期 */
    endTime?: number;
    /** 查询条数 */
    limit?: number;
}
/** JSONResult«List«项目阶段分布响应对象»» */
export interface IJSONResultListProjectPhaseDistributesResponseObjects {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProjectPhaseDistributesTheResponseObjects[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目阶段分布响应对象 */
export interface ITheProjectPhaseDistributesTheResponseObjects {
    /** 项目阶段名称 */
    projectStageName?: string;
    /** 项目阶段id */
    projectStageId?: string;
    /** 项目阶段排序 */
    sort?: number;
    /** 项目任务列表 */
    projectTaskList?: IProjectPhaseTasksDistributeResponseObjects[];
}
/** 项目阶段任务分布响应对象 */
export interface IProjectPhaseTasksDistributeResponseObjects {
    /** 项目任务类型id */
    projectTaskTypeId?: string;
    /** 项目任务类型编号 */
    projectTaskTypeCode?: string;
    /** 项目任务类型名称 */
    projectTaskTypeName?: string;
    /** 项目任务名称 */
    projectTaskName?: string;
    /** 项目任务id */
    projectTaskId?: string;
    /** 项目任务开始日期 */
    planBeginTime?: number;
    /** 项目任务状态 */
    taskStatus?: EProjectPhaseTasksDistributeResponseObjects_taskStatus;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: string;
}

export enum EProjectPhaseTasksDistributeResponseObjects_taskStatus {
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
