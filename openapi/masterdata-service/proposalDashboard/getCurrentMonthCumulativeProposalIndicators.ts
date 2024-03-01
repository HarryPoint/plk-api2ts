import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/合理化建议综合看板相关/getCurrentMonthCumulativeProposalIndicatorsUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultCumulativeProposalIndicatorsResponseDTO>(
        {
            url: "/masterdata-service/proposalDashboard/getCurrentMonthCumulativeProposalIndicators",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«CumulativeProposalIndicatorsResponseDTO» */
export interface IJSONResultCumulativeProposalIndicatorsResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ICumulativeProposalIndicatorsResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** CumulativeProposalIndicatorsResponseDTO */
export interface ICumulativeProposalIndicatorsResponseDTO {
    /** 本月/今年提案总数（审核通过） */
    approvedProposalQuantity?: number;
    /** 平均提案数 */
    avgProposalQuantity?: number;
    /** 全公司员工总数（已启用） */
    employeeTotalQuantity?: string;
    /** 项目完成数量 */
    projectCompleteQuantity?: string;
    /** 本月/今年计划提员工案数 */
    proposalEmployeePlanQuantity?: number;
    /** 本月/今年提案数大于0的数量 */
    proposalEmployeeQuantity?: number;
    /** 本月/今年参与率 */
    proposalRate?: number;
    /** 本月/今年提案总数（不论是否通过） */
    proposalTotalQuantity?: number;
}
