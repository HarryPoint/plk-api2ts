import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目报表相关/queryProjectLeaderInstructReportUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultPagingInformationProjectLeaderDirectiveReportResponseObject>(
        {
            url: "/masterdata-service/projectReport/queryProjectLeaderInstructReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«项目领导批示报表响应对象»» */
export interface IJSONResultPagingInformationProjectLeaderDirectiveReportResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationItemLeaderIndicatesTheReportResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«项目领导批示报表响应对象» */
export interface IPageInformationItemLeaderIndicatesTheReportResponseObject {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationItemLeaderIndicatesTheReportResponseObject_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationItemLeaderIndicatesTheReportResponseObject_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IProjectLeadIndicatesReportResponseObject[];
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
/** 项目领导批示报表响应对象 */
export interface IProjectLeadIndicatesReportResponseObject {
    /** 实际完成时间 */
    actualCompleteTime?: number;
    /** 编号 */
    code?: string;
    /** undefined */
    feedbackCycle?: string;
    /** 反馈周期名称 */
    feedbackCycleName?: string;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: string;
    /** id */
    id?: string;
    /** 是否超期 */
    isOverdue?: EProjectLeadIndicatesReportResponseObject_isOverdue;
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
    /** undefined */
    responsibleDeptId?: string;
    /** 责任单位名称 */
    responsibleDeptName?: string;
    /** undefined */
    responsibleUserIds?: Record<string, any>[];
    /** 责任人名称列表 */
    responsibleUserList?: string[];
    /** undefined */
    secretType?: string;
    /** 密级名称 */
    secretTypeName?: string;
    /** 状态 */
    status?: EProjectLeadIndicatesReportResponseObject_status;
    /** 时间节点 */
    timeNode?: number;
}

export enum EPageInformationItemLeaderIndicatesTheReportResponseObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationItemLeaderIndicatesTheReportResponseObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectLeadIndicatesReportResponseObject_isOverdue {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectLeadIndicatesReportResponseObject_status {
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
