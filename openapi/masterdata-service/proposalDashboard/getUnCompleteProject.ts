import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/合理化建议综合看板相关/getUnCompleteProjectUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultUnCompleteProjectResponseDTO>(
        {
            url: "/masterdata-service/proposalDashboard/getUnCompleteProject",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«UnCompleteProjectResponseDTO» */
export interface IJSONResultUnCompleteProjectResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IUnCompleteProjectResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** UnCompleteProjectResponseDTO */
export interface IUnCompleteProjectResponseDTO {
    /** 部门的各个项目指标 */
    departmentProjectIndicatorsList?: IDepartmentProjectIndicatorsResponseDTO[];
    /** 项目指标区间配置 */
    projectIndicatorsRangeConfigList?: IProjectIndicatorsRangeConfigResponseDTO[];
    /** 项目目标值 */
    projectTargetValue?: number;
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
/** ProjectIndicatorsRangeConfigResponseDTO */
export interface IProjectIndicatorsRangeConfigResponseDTO {
    /** 指标Key -> 项目指标Key */
    indicatorsKey?: string;
    /** 指标名称 */
    indicatorsName?: string;
}
