import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目概况相关/listProjectStageTaskUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultListProjectTaskResponseObject1>(
        {
            url: "/masterdata-service/projectOverview/listProjectStageTask",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目任务响应对象»»_1 */
export interface IJSONResultListProjectTaskResponseObject1 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectTaskResponseObject10[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目任务响应对象_10 */
export interface IProjectTaskResponseObject10 {
    /** 下级任务列表 */
    children?: IProjectTaskResponseObject9[];
    /** 项目id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目计划ids */
    projectPlanIds?: string[];
    /** 项目计划ids */
    projectPlanList?: IIdCodeNameGenericTransportObject[];
    /** 项目阶段来源应用编号 */
    projectStageFromAppCode?: string;
    /** 项目阶段来源应用id */
    projectStageFromAppId?: string;
    /** 项目阶段id */
    projectStageId?: string;
    /** 项目阶段名称 */
    projectStageName?: string;
    /** 项目阶段排序 */
    projectStageSort?: number;
}
/** 项目任务响应对象_9 */
export interface IProjectTaskResponseObject9 {
    /** 下级任务列表 */
    children?: IProjectTaskResponseObject9[];
    /** 任务编号 */
    code?: string;
    /** undefined */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** undefined */
    createUserId?: string;
    /** 创建员工名称 */
    createUserName?: string;
    /** 当前登录员工所属待办id */
    currentEmployeeTodoId?: string;
    /** 当前登录员工所属待办状态 */
    currentEmployeeTodoStatus?: EProjectTaskResponseObject9_currentEmployeeTodoStatus;
    /** 数据状态 0停用，1启用，2暂存 */
    dataStatus?: number;
    /** 交付物名称 */
    deliverableName?: string;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: string;
    /** 任务id */
    id?: string;
    /** 是否超期 */
    isOverdue?: EProjectTaskResponseObject9_isOverdue;
    /** 项目计划模块是否展示 */
    isProjectPlanShow?: EProjectTaskResponseObject9_isProjectPlanShow;
    /** 项目任务模块是否展示 */
    isProjectTaskShow?: EProjectTaskResponseObject9_isProjectTaskShow;
    /** undefined */
    leaderUserIds?: Record<string, any>[];
    /** 任务负责人名称 */
    leaderUserNameList?: string[];
    /** 层级 */
    level?: number;
    /** 任务名称 */
    name?: string;
    /** 超期天数(天) */
    overdueDay?: number;
    /** 上级任务id */
    parentId?: string;
    /** 上级任务名称 */
    parentName?: string;
    /** 任务开始日期 */
    planBeginTime?: number;
    /** 任务截止日期 */
    planEndTime?: number;
    /** undefined */
    preTaskIds?: Record<string, any>[];
    /** 前置任务列表 */
    preTaskList?: IProjectTaskPreTaskResponseObject[];
    /** undefined */
    priority?: string;
    /** 优先级 */
    priorityName?: string;
    /** undefined */
    processStatus?: string;
    /** 当前节点 */
    processStatusName?: string;
    /** 项目id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目计划编号 */
    projectPlanCode?: string;
    /** 项目计划id */
    projectPlanId?: string;
    /** 项目计划名称 */
    projectPlanName?: string;
    /** 项目阶段id */
    projectStageId?: string;
    /** 项目阶段名称 */
    projectStageName?: string;
    /** undefined */
    projectTaskTypeId?: string;
    /** 任务类型 */
    projectTaskTypeName?: string;
    /** 备注 */
    remark?: string;
    /** 排序 */
    sort?: number;
    /** 状态 */
    status?: EProjectTaskResponseObject9_status;
    /** 任务进度 */
    taskProgress?: number;
    /** 任务状态 */
    taskStatus?: EProjectTaskResponseObject9_taskStatus;
    /** 任务权重 */
    taskWeight?: number;
    /** undefined */
    updateDeptId?: string;
    /** 修改部门名称 */
    updateDeptName?: string;
    /** 修改时间 */
    updateTime?: number;
    /** undefined */
    updateUserId?: string;
    /** 修改员工名称 */
    updateUserName?: string;
}
/** 项目任务前置任务响应对象 */
export interface IProjectTaskPreTaskResponseObject {
    /** 任务编号 */
    code?: string;
    /** 任务id */
    id?: string;
    /** 任务名称 */
    name?: string;
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

export enum EProjectTaskResponseObject9_currentEmployeeTodoStatus {
    /** 待处理 */
    NOT_HANDLE = "NOT_HANDLE",
    /** 未读 */
    NOT_READ = "NOT_READ",
    /** 已完成 */
    HANDLED = "HANDLED",
    /** 已读 */
    READ = "READ"
}

export enum EProjectTaskResponseObject9_isOverdue {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectTaskResponseObject9_isProjectPlanShow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectTaskResponseObject9_isProjectTaskShow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectTaskResponseObject9_status {
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

export enum EProjectTaskResponseObject9_taskStatus {
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
