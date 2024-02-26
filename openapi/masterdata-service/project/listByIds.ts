import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目相关/listByIdsUsingPOST
*/
export default function fetchMethod(options: { data: number[] }, extraOptions?: any) {
    return http<IJSONResultListProjectResponse>(
        {
            url: "/masterdata-service/project/listByIds",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目响应»» */
export interface IJSONResultListProjectResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 项目响应 */
export interface IProjectResponse {
    /** id */
    id?: number;
    /** 项目编号 */
    code?: string;
    /** 项目名称 */
    name?: string;
    /** 项目状态 */
    projectStatus?: EProjectResponse_projectStatus;
    /** 初始化状态 */
    projectInitStatus?: EProjectResponse_projectInitStatus;
    /** 是否超期 */
    isOverdue?: EProjectResponse_isOverdue;
    /** 超期天数（天） */
    overdueDayCount?: number;
    /** 项目类型id */
    projectTypeId?: number;
    /** 项目经理id */
    projectManagerId?: number;
    /** 主责部门 */
    mainDutyDeptId?: number;
    /** 项目开始日期 */
    projectBeginDate?: string;
    /** 项目结束日期 */
    projectEndDate?: string;
    /** 项目目的 */
    projectGoal?: string;
    /** 项目文件key */
    projectFileKey?: string;
    /** 项目简介 */
    projectIntro?: string;
    /** 项目大类 */
    projectCategory?: string;
}

export enum EProjectResponse_projectStatus {
    /** 草稿 */
    DRAFT = "DRAFT",
    /** 审批中 */
    IN_APPROVE = "IN_APPROVE",
    /** 审批拒绝 */
    APPROVAL_DENIED = "APPROVAL_DENIED",
    /** 进行中 */
    IN_PROGRESS = "IN_PROGRESS",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已终止 */
    END = "END"
}

export enum EProjectResponse_projectInitStatus {
    /** 初始化中 */
    INITIALIZING = "INITIALIZING",
    /** 初始化完成 */
    COMPLETE = "COMPLETE",
    /** 初始化失败 */
    FAILED = "FAILED"
}

export enum EProjectResponse_isOverdue {
    /** 未超期 */
    NOT_OVERDUE = "NOT_OVERDUE",
    /** 已超期 */
    OVERDUE = "OVERDUE"
}
