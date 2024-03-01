import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/项目简报相关/queryFillingProjectTaskUsingGET
*/
export default function fetchMethod(options: { params: { projectId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProjectTaskResponseObject>(
        {
            url: "/masterdata-service/projectBriefReport/queryFillingProjectTask",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目任务响应对象»» */
export interface IJSONResultListProjectTaskResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectTaskResponseObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目任务响应对象 */
export interface IProjectTaskResponseObject {
    /** 任务编码 */
    code?: string;
    /** 完成事项 */
    completeItem?: string;
    /** 交付物名称 */
    deliverableName?: string;
    /** 任务id */
    id?: string;
    /** 是否超期 */
    isOverdue?: EProjectTaskResponseObject_isOverdue;
    /** 问题与措施 */
    issueAndMeasure?: string;
    /** 任务负责人 */
    leaderUserIds?: Record<string, any>[];
    /** 任务负责人 */
    leaderUserList?: IIdCodeNameGenericTransportObject[];
    /** 任务名称 */
    name?: string;
    /** 上级任务id */
    parentId?: string;
    /** 上级任务名称 */
    parentName?: string;
    /** 任务开始日期 */
    planBeginTime?: number;
    /** 任务截止日期 */
    planEndTime?: number;
    /** 前置任务ids */
    preTaskIds?: Record<string, any>[];
    /** 前置任务列表 */
    preTaskList?: IIdCodeNameGenericTransportObject[];
    /** 项目id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目阶段id */
    projectStageId?: string;
    /** 项目阶段名称 */
    projectStageName?: string;
    /** 任务类型id */
    projectTaskTypeId?: string;
    /** 任务类型 */
    projectTaskTypeName?: string;
    /** undefined */
    sort?: number;
    /** 任务进度 */
    taskProgress?: number;
    /** 任务状态 */
    taskStatus?: EProjectTaskResponseObject_taskStatus;
    /** 任务状态描述 */
    taskStatusDesc?: string;
}
/** Id Code Name 通用传输对象 */
export interface IIdCodeNameGenericTransportObject {
    /** code */
    code?: string;
    /** id */
    id?: string;
    /** name */
    name?: string;
}

export enum EProjectTaskResponseObject_isOverdue {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectTaskResponseObject_taskStatus {
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
