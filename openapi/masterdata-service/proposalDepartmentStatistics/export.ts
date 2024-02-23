import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/提案部门完成情况表-相关/exportUsingPOST_24
export default function fetchMethod(data: IProposalDepartmentStatisticsQueryRequestDTO) {
    return post<IJSONResultlong>({
      url: "/masterdata-service/proposalDepartmentStatistics/export",
      data,
    });
}
// ProposalDepartmentStatisticsQueryRequestDTO
export interface IProposalDepartmentStatisticsQueryRequestDTO {
    // 年份
    year: number;
    // 部门ID列表
    departmentIdList: number[];
    // 部门责任人列表
    departmentOwnerIdList: number[];
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
