// JSONResult«CumulativeProposalIndicatorsResponseDTO»
export interface IJSONResultCumulativeProposalIndicatorsResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ICumulativeProposalIndicatorsResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// CumulativeProposalIndicatorsResponseDTO
export interface ICumulativeProposalIndicatorsResponseDTO {
    // 本月/今年提案总数（不论是否通过）
    proposalTotalQuantity: number;
    // 本月/今年提案总数（审核通过）
    approvedProposalQuantity: number;
    // 本月/今年提案数大于0的数量
    proposalEmployeeQuantity: number;
    // 本月/今年计划提员工案数
    proposalEmployeePlanQuantity: number;
    // 本月/今年参与率
    proposalRate: number;
    // 全公司员工总数（已启用）
    employeeTotalQuantity: number;
    // 平均提案数
    avgProposalQuantity: number;
    // 项目完成数量
    projectCompleteQuantity: number;
}
