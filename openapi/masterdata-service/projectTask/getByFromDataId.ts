import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目任务相关/getByFromDataIdUsingGET
*/
export default function fetchMethod(options: { data: string }, extraOptions?: any) {
    return http<IJSONResultProjectTaskResponseObject>(
        {
            url: "/masterdata-service/projectTask/getByFromDataId",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«项目任务响应对象» */
export interface IJSONResultProjectTaskResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectTaskResponseObject6;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目任务响应对象_6 */
export interface IProjectTaskResponseObject6 {
    /** 任务id */
    id?: string;
    /** 任务名称 */
    name?: string;
    /** 任务编号 */
    code?: string;
    /** 任务类型 */
    projectTaskTypeName?: string;
    /** 任务负责人名称 */
    leaderUserNameList?: string[];
    /** 任务状态 */
    taskStatus?: EProjectTaskResponseObject6_taskStatus;
    /** 前置任务列表 */
    preTaskList?: IProjectTaskPreTaskResponseObject[];
    /** 任务开始日期 */
    planBeginTime?: number;
    /** 任务截止日期 */
    planEndTime?: number;
    /** 优先级 */
    priorityName?: string;
    /** 项目id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目计划id */
    projectPlanId?: string;
    /** 项目计划编号 */
    projectPlanCode?: string;
    /** 项目阶段id */
    projectStageId?: string;
    /** 项目阶段名称 */
    projectStageName?: string;
    /** 上级任务id */
    parentId?: string;
    /** 上级任务名称 */
    parentName?: string;
    /** 备注 */
    remark?: string;
    /** 是否超期 */
    isOverdue?: EProjectTaskResponseObject6_isOverdue;
    /** 层级 */
    level?: number;
    /** 排序 */
    sort?: number;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: string;
    /** 下级任务列表 */
    children?: IProjectTaskResponseObject9[];
    /** 当前登录员工所属待办id */
    currentEmployeeTodoId?: string;
    /** 当前登录员工所属待办状态 */
    currentEmployeeTodoStatus?: EProjectTaskResponseObject6_currentEmployeeTodoStatus;
    /** 状态 */
    status?: EProjectTaskResponseObject6_status;
    /** 数据状态 0停用，1启用，2暂存 */
    dataStatus?: number;
    /** 创建员工名称 */
    createUserName?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 修改员工名称 */
    updateUserName?: string;
    /** 修改部门名称 */
    updateDeptName?: string;
    /** 修改时间 */
    updateTime?: number;
    /** 超期天数(天) */
    overdueDay?: number;
    /** 任务进度 */
    taskProgress?: number;
    /** 交付物名称 */
    deliverableName?: string;
    /** 当前节点 */
    processStatusName?: string;
    /** undefined */
    leaderUserIds?: Record<string, any>[];
    /** undefined */
    preTaskIds?: Record<string, any>[];
    /** undefined */
    projectTaskTypeId?: string;
    /** undefined */
    priority?: string;
    /** undefined */
    createUserId?: string;
    /** undefined */
    createDeptId?: string;
    /** undefined */
    updateUserId?: string;
    /** undefined */
    updateDeptId?: string;
    /** undefined */
    processStatus?: string;
}
/** 项目任务前置任务响应对象 */
export interface IProjectTaskPreTaskResponseObject {
    /** 任务id */
    id?: string;
    /** 任务名称 */
    name?: string;
    /** 任务编号 */
    code?: string;
}
/** 项目任务响应对象_9 */
export interface IProjectTaskResponseObject9 {
    /** 任务id */
    id?: string;
    /** 任务名称 */
    name?: string;
    /** 任务编号 */
    code?: string;
    /** 任务类型 */
    projectTaskTypeName?: string;
    /** 任务负责人名称 */
    leaderUserNameList?: string[];
    /** 任务状态 */
    taskStatus?: EProjectTaskResponseObject9_taskStatus;
    /** 前置任务列表 */
    preTaskList?: IProjectTaskPreTaskResponseObject[];
    /** 任务开始日期 */
    planBeginTime?: number;
    /** 任务截止日期 */
    planEndTime?: number;
    /** 优先级 */
    priorityName?: string;
    /** 项目id */
    projectId?: string;
    /** 项目名称 */
    projectName?: string;
    /** 项目计划id */
    projectPlanId?: string;
    /** 项目计划编号 */
    projectPlanCode?: string;
    /** 项目阶段id */
    projectStageId?: string;
    /** 项目阶段名称 */
    projectStageName?: string;
    /** 上级任务id */
    parentId?: string;
    /** 上级任务名称 */
    parentName?: string;
    /** 备注 */
    remark?: string;
    /** 是否超期 */
    isOverdue?: EProjectTaskResponseObject9_isOverdue;
    /** 层级 */
    level?: number;
    /** 排序 */
    sort?: number;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: string;
    /** 下级任务列表 */
    children?: IProjectTaskResponseObject9[];
    /** 当前登录员工所属待办id */
    currentEmployeeTodoId?: string;
    /** 当前登录员工所属待办状态 */
    currentEmployeeTodoStatus?: EProjectTaskResponseObject9_currentEmployeeTodoStatus;
    /** 状态 */
    status?: EProjectTaskResponseObject9_status;
    /** 数据状态 0停用，1启用，2暂存 */
    dataStatus?: number;
    /** 创建员工名称 */
    createUserName?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 修改员工名称 */
    updateUserName?: string;
    /** 修改部门名称 */
    updateDeptName?: string;
    /** 修改时间 */
    updateTime?: number;
    /** 超期天数(天) */
    overdueDay?: number;
    /** 任务进度 */
    taskProgress?: number;
    /** 交付物名称 */
    deliverableName?: string;
    /** 当前节点 */
    processStatusName?: string;
    /** undefined */
    leaderUserIds?: Record<string, any>[];
    /** undefined */
    preTaskIds?: Record<string, any>[];
    /** undefined */
    projectTaskTypeId?: string;
    /** undefined */
    priority?: string;
    /** undefined */
    createUserId?: string;
    /** undefined */
    createDeptId?: string;
    /** undefined */
    updateUserId?: string;
    /** undefined */
    updateDeptId?: string;
    /** undefined */
    processStatus?: string;
}

export enum EProjectTaskResponseObject6_taskStatus {
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

export enum EProjectTaskResponseObject6_isOverdue {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectTaskResponseObject6_currentEmployeeTodoStatus {
    /** 待处理 */
    NOT_HANDLE = "NOT_HANDLE",
    /** 未读 */
    NOT_READ = "NOT_READ",
    /** 已完成 */
    HANDLED = "HANDLED",
    /** 已读 */
    READ = "READ"
}

export enum EProjectTaskResponseObject6_status {
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

export enum EProjectTaskResponseObject9_isOverdue {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
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
