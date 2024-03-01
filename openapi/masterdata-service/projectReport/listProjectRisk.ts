import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目报表相关/listProjectRiskUsingPOST
*/
export default function fetchMethod(options: { data: IItemNameNumberPublicQueryObject }, extraOptions?: any) {
    return http<IJSONResultListProjectRiskReportResponseObject>(
        {
            url: "/masterdata-service/projectReport/listProjectRisk",
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
/** JSONResult«List«项目风险报表响应对象»» */
export interface IJSONResultListProjectRiskReportResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProjectRiskReportResponseObject[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
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
