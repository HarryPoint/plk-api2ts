import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/合理化建议综合看板相关/getCompletedProjectUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultCompleteProjectResponseDTO>(
        {
            url: "/masterdata-service/proposalDashboard/getCompletedProject",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«CompleteProjectResponseDTO» */
export interface IJSONResultCompleteProjectResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ICompleteProjectResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** CompleteProjectResponseDTO */
export interface ICompleteProjectResponseDTO {
    /** 项目目标值 */
    projectTargetValue?: number;
    /** 项目指标区间配置 */
    projectIndicatorsRangeConfigList?: IProjectIndicatorsRangeConfigResponseDTO[];
    /** 部门的各个项目指标 */
    departmentProjectIndicatorsList?: IDepartmentProjectIndicatorsResponseDTO[];
}
/** ProjectIndicatorsRangeConfigResponseDTO */
export interface IProjectIndicatorsRangeConfigResponseDTO {
    /** 指标Key -> 项目指标Key */
    indicatorsKey?: string;
    /** 指标名称 */
    indicatorsName?: string;
}
/** DepartmentProjectIndicatorsResponseDTO */
export interface IDepartmentProjectIndicatorsResponseDTO {
    /** undefined */
    departmentId?: string;
    /** undefined */
    departmentName?: string;
    /** 指标Key => Project Quantity Map */
    indicatorsToProjectQuantityMap?: Record<string, number>;
}
