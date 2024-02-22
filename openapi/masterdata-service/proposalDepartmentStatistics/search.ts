// http://47.108.139.107:16700/doc.html#/default/提案部门完成情况表-相关/searchUsingPOST
// ProposalDepartmentStatisticsQueryRequestDTO
export interface IProposalDepartmentStatisticsQueryRequestDTO {
    // 年份
    year: number;
    // 部门ID列表
    departmentIdList: number[];
    // 部门责任人列表
    departmentOwnerIdList: number[];
}
// JSONResult«List«ProposalDepartmentStatisticsQueryResponseDTO»»
export interface IJSONResultListProposalDepartmentStatisticsQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProposalDepartmentStatisticsQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ProposalDepartmentStatisticsQueryResponseDTO
export interface IProposalDepartmentStatisticsQueryResponseDTO {
    // 年份
    year: number;
    // 部门ID
    departmentId: number;
    // 部门名称
    departmentName: string;
    // 部门Owner Id
    departmentOwnerId: number;
    // 部门Owner Name
    departmentOwnerName: string;
    // 截止月份
    deadlineMonth: number;
    // 改善提案数量目标
    planProposalQuantity: number;
    // 改善提案实施目标
    planProposalImplementationQuantity: number;
    // 改善提案参与人数目标
    planParticipantsQuantity: number;
    // 月指标列表-汇总
    monthIndicatorList: IProposalDepartmentMonthStatisticsResponseDTO[];
    // 1月指标列表
    month1IndicatorList: IProposalDepartmentMonthStatisticsResponseDTO[];
    // 2月指标列表
    month2IndicatorList: IProposalDepartmentMonthStatisticsResponseDTO[];
    // 3月指标列表
    month3IndicatorList: IProposalDepartmentMonthStatisticsResponseDTO[];
    // 4月指标列表
    month4IndicatorList: IProposalDepartmentMonthStatisticsResponseDTO[];
    // 5月指标列表
    month5IndicatorList: IProposalDepartmentMonthStatisticsResponseDTO[];
    // 6月指标列表
    month6IndicatorList: IProposalDepartmentMonthStatisticsResponseDTO[];
    // 7月指标列表
    month7IndicatorList: IProposalDepartmentMonthStatisticsResponseDTO[];
    // 8月指标列表
    month8IndicatorList: IProposalDepartmentMonthStatisticsResponseDTO[];
    // 9月指标列表
    month9IndicatorList: IProposalDepartmentMonthStatisticsResponseDTO[];
    // 10月指标列表
    month10IndicatorList: IProposalDepartmentMonthStatisticsResponseDTO[];
    // 11月指标列表
    month11IndicatorList: IProposalDepartmentMonthStatisticsResponseDTO[];
    // 12月指标列表
    month12IndicatorList: IProposalDepartmentMonthStatisticsResponseDTO[];
    // 年指标列表
    ytdIndicatorList: IProposalDepartmentYtdStatisticsResponseDTO[];
}
// ProposalDepartmentMonthStatisticsResponseDTO
export interface IProposalDepartmentMonthStatisticsResponseDTO {
    // 月份
    month: number;
    // 数量目标
    planQuantity: number;
    // 实际数量
    actualQuantity: number;
    // 完成率
    completionRate: number;
}
// ProposalDepartmentYtdStatisticsResponseDTO
export interface IProposalDepartmentYtdStatisticsResponseDTO {
    // 数量目标 Round(部门年改善提案数量目标/12, 1) * 统计截止月份
    planQuantity: number;
    // 实际数量 当前月份部门以及子部门提案数量
    actualQuantity: number;
    // 完成率 实际数量 / 数量目标 * 100%
    completionRate: number;
    // 实施目标 Round(部门年改善提案实施目标/12, 1) * 统计截止月份
    planProposalImplementationQuantity: number;
    // 实际实施目标 - 截止当前月份部门以及子部门提案关联已完成项目数量
    actualProposalImplementationQuantity: number;
    // 实际实施目标 - 完成率
    actualProposalImplementationRate: number;
    // 参与人数目标 - ROUND(部门年参与人数目标/12, 1) * 统计截止月份
    planParticipantsQuantity: number;
    // 实际参与人数 -当年该部门及子部门员工提案大于0的员工总数
    actualParticipantsQuantity: number;
    // 实际参与人数 -完成率
    actualParticipantsRate: number;
}
