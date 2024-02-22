import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/合理化建议综合看板相关/getMonthProposalIndicatorsUsingGET
export function fetchMethod() {
    return get({
      url: "/masterdata-service/proposalDashboard/getMonthProposalIndicators",
    });
}
// JSONResult«MonthProposalIndicatorsResponseDTO»
export interface IJSONResultMonthProposalIndicatorsResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IMonthProposalIndicatorsResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// MonthProposalIndicatorsResponseDTO
export interface IMonthProposalIndicatorsResponseDTO {
    // 改善提案有效数量和员工参与率月目标
    monthProposalIndicatorsList: IMonthProposalIndicatorsItemResponseDTO[];
}
// MonthProposalIndicatorsItemResponseDTO
export interface IMonthProposalIndicatorsItemResponseDTO {
    // 月份
    month: number;
    // 提案有效数量
    proposalQuantity: number;
    // 全公司提案数大于0的员工总数
    employeeQuantity: number;
    // 月目标 = 全公司改善提案参与人数年目标/12
    currentMonthPlanQuantity: number;
    // 当月员工参与率
    currentMonthEmployeeRate: number;
}
