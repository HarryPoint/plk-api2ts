import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/合理化建议综合看板相关/queryProposalEmployeeScoreTopNUsingGET
export default function fetchMethod() {
    return get<IJSONResultEmployeeScoreIndicatorsResponseDTO>({
      url: "/masterdata-service/proposalDashboard/queryProposalEmployeeScoreTopN",
    });
}
// JSONResult«EmployeeScoreIndicatorsResponseDTO»
export interface IJSONResultEmployeeScoreIndicatorsResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IEmployeeScoreIndicatorsResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// EmployeeScoreIndicatorsResponseDTO
export interface IEmployeeScoreIndicatorsResponseDTO {
    // 指标列表
    indicatorsList: IEmployeeScoreIndicatorsItemResponseDTO[];
}
// EmployeeScoreIndicatorsItemResponseDTO
export interface IEmployeeScoreIndicatorsItemResponseDTO {
    // 员工ID
    employeeId: number;
    // 员工姓名
    employeeName: string;
    // 用户头像的文件Key
    avatar: string;
    // 用户成绩
    score: number;
}
