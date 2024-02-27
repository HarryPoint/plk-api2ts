import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目相关/queryBaseProjectUsingPOST
*/
export default function fetchMethod(options: { data: IProjectPhaseTaskQueryObject }, extraOptions?: any) {
    return http<IJSONResultListProjectBaseQueryResponseObject>(
        {
            url: "/masterdata-service/project/queryBaseProject",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 项目阶段任务查询对象 */
export interface IProjectPhaseTaskQueryObject {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 项目id集 */
    projectIds?: string[];
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 项目计划id */
    projectPlanId?: string;
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 任务名称 */
    name?: string;
    /** 导出字段集 */
    exportFields?: string[];
    /** 是否超期（Y是 N:否） */
    isOverdueList?: string[];
    /** 项目id */
    projectId?: string;
    /** 项目阶段ids列表 */
    projectStageIds?: string[];
    /** 项目经理id集 */
    projectManagerIds?: string[];
    /** 任务编号 */
    code?: string;
    /** 任务负责人列表 */
    leaderUserIds?: string[];
    /** 名称or编号 */
    nameOrCode?: string;
    /** 任务状态（DRAFT:草稿,UN_ISSUE:未下发,UN_RECEIVE:未接受,UN_START:未开始,HANDLING:进行中,COMPLETE:已完成,NOT_PASS:未通过,CANCEL:已取消） */
    taskStatusList?: string[];
    /** 超期天数开始 */
    beginOverdueDay?: number;
    /** 是否超期（Y是 N:否） */
    isOverdueGroupList?: string[];
    /** 项目任务类型ids列表 */
    projectTaskTypeIds?: string[];
    /** 任务开始日期 --开始日期 */
    beginPlanBeginTime?: number;
    /** 任务状态（DRAFT:草稿,UN_ISSUE:未下发,UN_RECEIVE:未接受,UN_START:未开始,HANDLING:进行中,COMPLETE:已完成,NOT_PASS:未通过,CANCEL:已取消） */
    taskStatusGroupList?: string[];
    /** 超期天数结束 */
    endOverdueDay?: number;
    /** 任务查询日期 --开始日期 */
    beginTaskTime?: number;
    /** 任务id集 */
    taskIds?: string[];
    /** 任务查询日期 --开始日期 */
    endTaskTime?: number;
    /** 前置任务列表 */
    preTaskIds?: string[];
    /** 任务开始日期 --结束日期 */
    endPlanBeginTime?: number;
    /** 上级任务列表 */
    parentIds?: string[];
    /** 任务截止日期 --开始日期 */
    beginPlanEndTime?: number;
    /** 备注 */
    remark?: string;
    /** 任务截止日期 --结束日期 */
    endPlanEndTime?: number;
    /** 状态 HANDLING进行中，COMPLETE已完成，NOT_PASS未通过, STAGING暂存, INVALID作废/停用 */
    statusList?: string[];
    /** 数据状态 0停用，1启用，2暂存 */
    dataStatusList?: number[];
    /** 创建员工ids */
    createUserIds?: string[];
    /** 优先级列表 */
    priorityList?: string[];
    /** 创建时间 --开始日期 */
    beginCreateTime?: number;
    /** 创建时间 --结束日期 */
    endCreateTime?: number;
    /** 修改员工ids */
    updateUserIds?: string[];
    /** 修改时间 --开始日期 */
    beginUpdateTime?: number;
    /** 创建部门ids */
    createDeptIds?: string[];
    /** 修改时间 --结束日期 */
    endUpdateTime?: number;
    /** 处理进度名称列表 */
    processStatusNames?: string[];
    /** 修改部门ids */
    updateDeptIds?: string[];
    /** 是否仅查询当前登录用户 */
    isQueryCurrentMember?: EProjectPhaseTaskQueryObject_isQueryCurrentMember;
    /** undefined */
    fromAppIds?: string[];
    /** 是否展示子任务 */
    isShowChildTask?: EProjectPhaseTaskQueryObject_isShowChildTask;
    /** undefined */
    projectPlanFlowIsComplete?: EProjectPhaseTaskQueryObject_projectPlanFlowIsComplete;
    /** 项目类型id集 */
    projectTypeIds?: string[];
    /** undefined */
    notEmptyCondition?: boolean;
    /** 项目大类集 */
    projectCategories?: string[];
    /** undefined */
    filterDraftStatus?: EProjectPhaseTaskQueryObject_filterDraftStatus;
    /** 项目管理员id集 */
    projectAdminUserIds?: string[];
    /** undefined */
    processStatusCodes?: string[];
    /** 项目状态 */
    projectStatus?: EProjectPhaseTaskQueryObject_projectStatus;
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«List«项目基础查询响应对象»» */
export interface IJSONResultListProjectBaseQueryResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectBaseQueryResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目基础查询响应对象 */
export interface IProjectBaseQueryResponseObject {
    /** 项目id */
    id?: string;
    /** 项目名称 */
    name?: string;
    /** 项目编号 */
    code?: string;
    /** 项目类型 */
    projectTypeName?: string;
    /** 项目经理 */
    projectManagerName?: string;
}

export enum EProjectPhaseTaskQueryObject_isQueryCurrentMember {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectPhaseTaskQueryObject_isShowChildTask {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectPhaseTaskQueryObject_projectPlanFlowIsComplete {
    Y = "Y",
    N = "N"
}

export enum EProjectPhaseTaskQueryObject_filterDraftStatus {
    Y = "Y",
    N = "N"
}

export enum EProjectPhaseTaskQueryObject_projectStatus {
    /** 草稿 */
    DRAFT = "DRAFT",
    /** 审批中 */
    IN_APPROVE = "IN_APPROVE",
    /** 审批拒绝 */
    APPROVAL_DENIED = "APPROVAL_DENIED",
    /** 进行中 */
    IN_PROGRESS = "IN_PROGRESS",
    /** 已关闭 */
    COMPLETE = "COMPLETE",
    /** 已终止 */
    END = "END"
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
