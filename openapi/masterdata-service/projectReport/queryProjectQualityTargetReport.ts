import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目报表相关/queryProjectQualityTargetReportUsingPOST
*/
export default function fetchMethod(options: { data: QueryProjectQualityTargetReport }, extraOptions?: any) {
    return http<IJSONResultPagingInformationItemQualityTargetReportResponseObject>(
        {
            url: "/masterdata-service/projectReport/queryProjectQualityTargetReport",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«项目质量目标报表响应对象»» */
export interface IJSONResultPagingInformationItemQualityTargetReportResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationItemQualityTargetReportResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«项目质量目标报表响应对象» */
export interface IPageInformationItemQualityTargetReportResponseObject {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IProjectQualityObjectiveReportResponseObject[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationItemQualityTargetReportResponseObject_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationItemQualityTargetReportResponseObject_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 项目质量目标报表响应对象 */
export interface IProjectQualityObjectiveReportResponseObject {
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
    isOverdue?: EProjectQualityObjectiveReportResponseObject_isOverdue;
    /** 超期天数(天) */
    overdueDay?: number;
    /** 状态 */
    status?: EProjectQualityObjectiveReportResponseObject_status;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: string;
    /** undefined */
    projectManagerId?: string;
    /** 负责人名称列表 */
    responsibleNameList?: string[];
    /** 开始日期 */
    beginTime?: number;
    /** 截至日期 */
    endTime?: number;
    /** 实际完成时间 */
    actualCompleteTime?: number;
    /** undefined */
    responsibleUserIds?: Record<string, any>[];
}

export enum EPageInformationItemQualityTargetReportResponseObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationItemQualityTargetReportResponseObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectQualityObjectiveReportResponseObject_isOverdue {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectQualityObjectiveReportResponseObject_status {
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
