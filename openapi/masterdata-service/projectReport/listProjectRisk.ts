import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目报表相关/listProjectRiskUsingPOST
*/
export default function fetchMethod(options: { data: IItemNameNumberPublicQueryObject }, extraOptions?: any) {
    return http<IJSONResultListProjectRiskReportResponseObject>(
        {
            url: "/masterdata-service/projectReport/listProjectRisk",
            method: "post",
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
    /** undefined */
    ids?: string[];
    /** undefined */
    projectIds?: string[];
    /** undefined */
    projectPlanIds?: string[];
    /** undefined */
    statusList?: string[];
}
/** JSONResult«List«项目风险报表响应对象»» */
export interface IJSONResultListProjectRiskReportResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectRiskReportResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目风险报表响应对象 */
export interface IProjectRiskReportResponseObject {
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
    /** 项目id */
    projectId?: string;
    /** 处理人名称列表 */
    handleUserNameList?: string[];
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
    isOverdue?: EProjectRiskReportResponseObject_isOverdue;
    /** 超期天数(天) */
    overdueDay?: number;
    /** 状态 */
    status?: EProjectRiskReportResponseObject_status;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: string;
    /** undefined */
    projectManagerId?: string;
    /** 风险类型名称 */
    projectRiskTypeName?: string;
    /** 风险标识名称 */
    projectRiskFlagName?: string;
    /** 风险等级 */
    level?: EProjectRiskReportResponseObject_level;
    /** 责任单位 */
    responsibleDeptName?: string;
    /** 要求完成时间 */
    requireCompleteTime?: number;
    /** 实际完成时间 */
    actualCompleteTime?: number;
    /** undefined */
    projectRiskTypeId?: string;
    /** undefined */
    projectRiskFlagId?: string;
    /** undefined */
    responsibleDeptId?: string;
    /** undefined */
    handleUserIds?: Record<string, any>[];
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
