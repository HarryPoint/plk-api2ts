import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目报表相关/listProjectLeaderInstructUsingPOST
*/
export default function fetchMethod(options: { data: IItemNameNumberPublicQueryObject }, extraOptions?: any) {
    return http<IJSONResultListProjectLeadCommandReportResponseObject>(
        {
            url: "/masterdata-service/projectReport/listProjectLeaderInstruct",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目名称编号公共查询对象 */
export interface IItemNameNumberPublicQueryObject {
    /** 项目成员id集合 */
    ids?: string[];
    /** 条数 */
    limit?: number;
    /** 名称or编号 */
    nameOrCode?: string;
    /** undefined */
    projectIds?: string[];
    /** 项目计划ids */
    projectPlanIds?: string[];
    /** undefined */
    statusList?: string[];
}
/** JSONResult«List«项目领导批示报表响应对象»» */
export interface IJSONResultListProjectLeadCommandReportResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectLeadIndicatesReportResponseObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
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
