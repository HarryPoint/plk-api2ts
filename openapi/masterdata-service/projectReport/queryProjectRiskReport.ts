import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目报表相关/queryProjectRiskReportUsingPOST
*/
export default function fetchMethod(options: { data: QueryProjectRiskReport }, extraOptions?: any) {
    return http<IJSONResultPagingInformationProjectRiskReportResponseObject>(
        {
            url: "/masterdata-service/projectReport/queryProjectRiskReport",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«项目风险报表响应对象»» */
export interface IJSONResultPagingInformationProjectRiskReportResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationProjectRiskReportResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«项目风险报表响应对象» */
export interface IPageInformationProjectRiskReportResponseObject {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IProjectRiskReportResponseObject[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationProjectRiskReportResponseObject_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationProjectRiskReportResponseObject_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 项目风险报表响应对象 */
export interface IProjectRiskReportResponseObject {
    /** id */
    id?: number;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
    /** 项目id */
    projectId?: number;
    /** 处理人名称列表 */
    handleUserNameList?: string[];
    /** 项目名称 */
    projectName?: string;
    /** 项目编号 */
    projectCode?: string;
    /** 项目类型id */
    projectTypeId?: number;
    /** 项目类型名称 */
    projectTypeName?: string;
    /** 项目大类 */
    projectCategory?: string;
    /** 项目大类名称 */
    projectCategoryName?: string;
    /** 项目经理名称 */
    projectManagerName?: string;
    /** 是否超期 */
    isOverdue?: EProjectRiskReportResponseObject_isOverdue;
    /** 超期天数(天) */
    overdueDay?: number;
    /** 状态 */
    status?: EProjectRiskReportResponseObject_status;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: number;
    /** undefined */
    projectManagerId?: number;
    /** 风险类型名称 */
    projectRiskTypeName?: string;
    /** 风险标识名称 */
    projectRiskFlagName?: string;
    /** 风险等级 */
    level?: EProjectRiskReportResponseObject_level;
    /** 责任单位 */
    responsibleDeptName?: string;
    /** 要求完成时间 */
    requireCompleteTime?: string;
    /** 实际完成时间 */
    actualCompleteTime?: string;
    /** undefined */
    projectRiskTypeId?: number;
    /** undefined */
    projectRiskFlagId?: number;
    /** undefined */
    responsibleDeptId?: number;
    /** undefined */
    handleUserIds?: Record<string, any>[];
}

export enum EPageInformationProjectRiskReportResponseObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationProjectRiskReportResponseObject_hasNextPage {
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

export enum EProjectRiskReportResponseObject_level {
    /** 低风险 */
    LOW = "LOW",
    /** 中分线 */
    MID = "MID",
    /** 高风险 */
    HIGH = "HIGH"
}
