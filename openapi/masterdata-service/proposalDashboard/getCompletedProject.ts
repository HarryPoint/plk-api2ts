import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/合理化建议综合看板相关/getCompletedProjectUsingGET
export default function fetchMethod() {
    return get<IJSONResultCompleteProjectResponseDTO['data']>({
      url: "/masterdata-service/proposalDashboard/getCompletedProject",
    });
}
// JSONResult«CompleteProjectResponseDTO»
export interface IJSONResultCompleteProjectResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ICompleteProjectResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// CompleteProjectResponseDTO
export interface ICompleteProjectResponseDTO {
    // 项目目标值
    projectTargetValue: number;
    // 项目指标区间配置
    projectIndicatorsRangeConfigList: IProjectIndicatorsRangeConfigResponseDTO[];
    // 部门的各个项目指标
    departmentProjectIndicatorsList: IDepartmentProjectIndicatorsResponseDTO[];
}
// ProjectIndicatorsRangeConfigResponseDTO
export interface IProjectIndicatorsRangeConfigResponseDTO {
    // 指标Key -> 项目指标Key
    indicatorsKey: string;
    // 指标名称
    indicatorsName: string;
}
// DepartmentProjectIndicatorsResponseDTO
export interface IDepartmentProjectIndicatorsResponseDTO {
    // undefined
    departmentId: number;
    // undefined
    departmentName: string;
    // 指标Key => Project Quantity Map
    indicatorsToProjectQuantityMap: Record<string, number>;
}
