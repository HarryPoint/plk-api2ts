import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/合理化建议综合看板-配置页面相关/saveUsingPOST_6
*/
export default function fetchMethod(options: { data: IProposalDashboardConfigRequestDTO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/proposalDashboardConfig/save",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** ProposalDashboardConfigRequestDTO */
export interface IProposalDashboardConfigRequestDTO {
    /** ID */
    id?: number;
    /** 建议部门ID列表 */
    proposalDepartmentIdList?: number[];
    /** 项目部门ID列表 */
    projectDepartmentIdList?: number[];
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
    id?: number;
    /** 统计类型 */
    type?: ('RANGE' | 'GE' | 'GT');
    /** 开始值 - 适用于数值区间、数值大于等于、数值大于 */
    beginValue?: number;
    /** 结束值 */
    endValue?: number;
    /** 项目归属的完成状态 - 未完成项目， 已完成项目 */
    projectCompleteStatus?: ('UN_COMPLETED' | 'COMPLETED');
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
