import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/合理化建议综合看板相关/getDepartmentProposalUsingGET
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultDepartmentProposalDashboardResponseDTO>(
        {
            url: "/masterdata-service/proposalDashboard/getDepartmentProposal",
            method: "get",
        },
        extraOptions,
    );
}
// JSONResult«DepartmentProposalDashboardResponseDTO»
export interface IJSONResultDepartmentProposalDashboardResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IDepartmentProposalDashboardResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// DepartmentProposalDashboardResponseDTO
export interface IDepartmentProposalDashboardResponseDTO {
    // 年份
    year: number;
    // 部门年目标设置ID
    departmentYearTargetSettingId: number;
    // 部门提案指标
    departmentProposalIndicatorsList: IDepartmentProposalIndicatorsResponseDTO[];
}
// DepartmentProposalIndicatorsResponseDTO
export interface IDepartmentProposalIndicatorsResponseDTO {
    // 部门ID
    departmentId: number;
    // 部门名称
    departmentName: string;
    // 提案数量
    proposalQuantity: number;
    // 完成数量
    completeProjectQuantity: number;
    // 员工参与数量
    userQuantity: number;
    // （部门年改善提案数量目标/12*当前月份）
    proposalPlanQuantity: number;
    // （部门改善实施年目标/12*当前月份）
    proposalImplementationQuantity: number;
    // （部门改善提案参与人数目标/12*当前月份）
    participantsQuantity: number;
    // 提案完成率 (小数，未乘以 * 100%)
    proposalCompleteRate: number;
    // 实际实施率(小数，未乘以 * 100%)
    proposalImplementationRate: number;
    // 员工参与率(小数，未乘以 * 100%)
    participantsQuantityRate: number;
}
