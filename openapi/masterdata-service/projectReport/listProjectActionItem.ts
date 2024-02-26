import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目报表相关/listProjectActionItemUsingPOST
*/
export default function fetchMethod(options: { data: IItemNameNumberPublicQueryObject }, extraOptions?: any) {
    return http<IJSONResultListProjectActionItemReportResponseObject>(
        {
            url: "/masterdata-service/projectReport/listProjectActionItem",
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
    /** 项目计划ids */
    projectPlanIds?: number[];
    /** undefined */
    ids?: number[];
    /** undefined */
    projectIds?: number[];
    /** undefined */
    statusList?: string[];
}
/** JSONResult«List«项目行动项报表响应对象»» */
export interface IJSONResultListProjectActionItemReportResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProjectActionItemReportResponseObject[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 项目行动项报表响应对象 */
export interface IProjectActionItemReportResponseObject {
    /** id */
    id?: number;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
    /** 项目id */
    projectId?: number;
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
    isOverdue?: EProjectActionItemReportResponseObject_isOverdue;
    /** 超期天数(天) */
    overdueDay?: number;
    /** 状态 */
    status?: EProjectActionItemReportResponseObject_status;
    /** 来源应用编号 */
    fromAppCode?: string;
    /** 来源应用id */
    fromAppId?: number;
    /** undefined */
    projectManagerId?: number;
    /** 行动项类型名称 */
    projectActionTypeName?: string;
    /** 密级名称 */
    secretTypeName?: string;
    /** 反馈周期名称 */
    feedbackCycleName?: string;
    /** 责任单位名称 */
    responsibleDeptName?: string;
    /** 责任人名称列表 */
    responsibleUserList?: string[];
    /** 时间节点 */
    timeNode?: string;
    /** 实际完成时间 */
    actualCompleteTime?: string;
    /** undefined */
    responsibleDeptId?: number;
    /** undefined */
    responsibleUserIds?: Record<string, any>[];
    /** undefined */
    secretType?: string;
    /** undefined */
    feedbackCycle?: string;
    /** undefined */
    type?: string;
}

export enum EProjectActionItemReportResponseObject_isOverdue {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProjectActionItemReportResponseObject_status {
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
