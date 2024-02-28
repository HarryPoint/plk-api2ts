import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/合理化建议综合看板-配置页面相关/saveUsingPOST_6
*/
export default function fetchMethod(options: { data: IProposalDashboardConfigRequestDTO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/proposalDashboardConfig/save",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** ProposalDashboardConfigRequestDTO */
export interface IProposalDashboardConfigRequestDTO {
    /** ID */
    id?: string;
    /** 建议部门ID列表 */
    proposalDepartmentIdList?: string[];
    /** 项目部门ID列表 */
    projectDepartmentIdList?: string[];
    /** 未完成目标值 */
    unCompleteTargetValue?: number;
    /** 已完成目标值 */
    completeTargetValue?: number;
    /** 未完成项目数量的统计区间配置 */
    unCompleteProjectDashboardStatisticsConfigList?: IProposalDashboardStatisticsConfigRequestDTO[];
    /** 已完成项目数量的统计区间配置 */
    completedProjectDashboardStatisticsConfigList?: IProposalDashboardStatisticsConfigRequestDTO[];
}
/** ProposalDashboardStatisticsConfigRequestDTO */
export interface IProposalDashboardStatisticsConfigRequestDTO {
    /** ID */
    id?: string;
    /** 统计类型 */
    type?: EProposalDashboardStatisticsConfigRequestDTO_type;
    /** 开始值 - 适用于数值区间、数值大于等于、数值大于 */
    beginValue?: number;
    /** 结束值 */
    endValue?: number;
    /** 项目归属的完成状态 - 未完成项目， 已完成项目 */
    projectCompleteStatus?: EProposalDashboardStatisticsConfigRequestDTO_projectCompleteStatus;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EProposalDashboardStatisticsConfigRequestDTO_type {
    /** 数值区间 */
    RANGE = "RANGE",
    /** 数值大于等于 */
    GE = "GE",
    /** 数值大于 */
    GT = "GT"
}

export enum EProposalDashboardStatisticsConfigRequestDTO_projectCompleteStatus {
    /** 未完成 */
    UN_COMPLETED = "UN_COMPLETED",
    /** 已完成 */
    COMPLETED = "COMPLETED"
}
