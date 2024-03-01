import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目报表相关/queryProjectRiskReportUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultPagingInformationProjectRiskReportResponseObject>(
        {
            url: "/masterdata-service/projectReport/queryProjectRiskReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«项目风险报表响应对象»» */
export interface IJSONResultPagingInformationProjectRiskReportResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationProjectRiskReportResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«项目风险报表响应对象» */
export interface IPageInformationProjectRiskReportResponseObject {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationProjectRiskReportResponseObject_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationProjectRiskReportResponseObject_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IProjectRiskReportResponseObject[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** 项目风险报表响应对象 */
export interface IProjectRiskReportResponseObject {
    /** 实际完成时间 */
    actualCompleteTime?: number;
    /** 编号 */
    code?: string;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: string;
    /** undefined */
    handleUserIds?: Record<string, any>[];
    /** 处理人名称列表 */
    handleUserNameList?: string[];
    /** id */
    id?: string;
    /** 是否超期 */
    isOverdue?: EProjectRiskReportResponseObject_isOverdue;
    /** 风险等级 */
    level?: EProjectRiskReportResponseObject_level;
    /** 名称 */
    name?: string;
    /** 超期天数(天) */
    overdueDay?: number;
    /** 项目大类 */
    projectCategory?: string;
    /** 项目大类名称 */
    projectCategoryName?: string;
    /** 项目编号 */
    projectCode?: string;
    /** 项目id */
    projectId?: string;
    /** undefined */
    projectManagerId?: string;
    /** 项目经理名称 */
    projectManagerName?: string;
    /** 项目名称 */
    projectName?: string;
    /** undefined */
    projectRiskFlagId?: string;
    /** 风险标识名称 */
    projectRiskFlagName?: string;
    /** undefined */
    projectRiskTypeId?: string;
    /** 风险类型名称 */
    projectRiskTypeName?: string;
    /** 项目类型id */
    projectTypeId?: string;
    /** 项目类型名称 */
    projectTypeName?: string;
    /** 要求完成时间 */
    requireCompleteTime?: number;
    /** undefined */
    responsibleDeptId?: string;
    /** 责任单位 */
    responsibleDeptName?: string;
    /** 状态 */
    status?: EProjectRiskReportResponseObject_status;
}

export enum EPageInformationProjectRiskReportResponseObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationProjectRiskReportResponseObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectRiskReportResponseObject_isOverdue {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectRiskReportResponseObject_level {
    /** 低风险 */
    LOW = "LOW",
    /** 中分线 */
    MID = "MID",
    /** 高风险 */
    HIGH = "HIGH"
}

export enum EProjectRiskReportResponseObject_status {
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
