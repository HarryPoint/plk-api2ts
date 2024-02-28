import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目报表相关/listProjectQualityIssueUsingPOST
*/
export default function fetchMethod(options: { data: IItemNameNumberPublicQueryObject }, extraOptions?: any) {
    return http<IJSONResultListProjectQualityProblemReportResponseObject>(
        {
            url: "/masterdata-service/projectReport/listProjectQualityIssue",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目名称编号公共查询对象 */
export interface IItemNameNumberPublicQueryObject {
    /** 名称or编号 */
    nameOrCode?: string;
    /** 条数 */
    limit?: number;
    /** 项目计划ids */
    projectPlanIds?: string[];
    /** 项目成员id集合 */
    ids?: string[];
    /** undefined */
    projectIds?: string[];
    /** undefined */
    statusList?: string[];
}
/** JSONResult«List«项目质量问题报表响应对象»» */
export interface IJSONResultListProjectQualityProblemReportResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectQualityProblemReportResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目质量问题报表响应对象 */
export interface IProjectQualityProblemReportResponseObject {
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
    /** 项目大类 */
    projectCategory?: string;
    /** 项目大类名称 */
    projectCategoryName?: string;
    /** 项目经理名称 */
    projectManagerName?: string;
    /** 是否超期 */
    isOverdue?: EProjectQualityProblemReportResponseObject_isOverdue;
    /** 超期天数(天) */
    overdueDay?: number;
    /** 状态 */
    status?: EProjectQualityProblemReportResponseObject_status;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: string;
    /** undefined */
    projectManagerId?: string;
    /** 负责人名称列表 */
    responsibleNameList?: string[];
    /** 开始处理日期 */
    beginHandleTime?: number;
    /** 结束处理日期 */
    endHandleTime?: number;
    /** 实际完成时间 */
    actualCompleteTime?: number;
    /** undefined */
    responsibleUserIds?: Record<string, any>[];
}

export enum EProjectQualityProblemReportResponseObject_isOverdue {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectQualityProblemReportResponseObject_status {
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
