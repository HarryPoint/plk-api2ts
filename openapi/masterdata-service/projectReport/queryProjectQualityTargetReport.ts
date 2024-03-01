import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目报表相关/queryProjectQualityTargetReportUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultPagingInformationItemQualityTargetReportResponseObject>(
        {
            url: "/masterdata-service/projectReport/queryProjectQualityTargetReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«项目质量目标报表响应对象»» */
export interface IJSONResultPagingInformationItemQualityTargetReportResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationItemQualityTargetReportResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«项目质量目标报表响应对象» */
export interface IPageInformationItemQualityTargetReportResponseObject {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationItemQualityTargetReportResponseObject_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationItemQualityTargetReportResponseObject_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IProjectQualityObjectiveReportResponseObject[];
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
/** 项目质量目标报表响应对象 */
export interface IProjectQualityObjectiveReportResponseObject {
    /** 实际完成时间 */
    actualCompleteTime?: number;
    /** 开始日期 */
    beginTime?: number;
    /** 编号 */
    code?: string;
    /** 截至日期 */
    endTime?: number;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: string;
    /** id */
    id?: string;
    /** 是否超期 */
    isOverdue?: EProjectQualityObjectiveReportResponseObject_isOverdue;
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
    /** 项目类型id */
    projectTypeId?: string;
    /** 项目类型名称 */
    projectTypeName?: string;
    /** 负责人名称列表 */
    responsibleNameList?: string[];
    /** undefined */
    responsibleUserIds?: Record<string, any>[];
    /** 状态 */
    status?: EProjectQualityObjectiveReportResponseObject_status;
}

export enum EPageInformationItemQualityTargetReportResponseObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationItemQualityTargetReportResponseObject_hasPreviousPage {
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
