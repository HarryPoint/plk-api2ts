import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/合理化建议综合看板相关/getImprovementCategoryIndicatorsUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultImprovementCategoryIndicatorsResponseDTO>(
        {
            url: "/masterdata-service/proposalDashboard/getImprovementCategoryIndicators",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ImprovementCategoryIndicatorsResponseDTO» */
export interface IJSONResultImprovementCategoryIndicatorsResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IImprovementCategoryIndicatorsResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ImprovementCategoryIndicatorsResponseDTO */
export interface IImprovementCategoryIndicatorsResponseDTO {
    /** 改善类别列表 */
    indicatorsList?: IImprovementCategoryIndicatorsItemResponseDTO[];
}
/** ImprovementCategoryIndicatorsItemResponseDTO */
export interface IImprovementCategoryIndicatorsItemResponseDTO {
    /** 改善类别ID */
    improvementCategoryId?: string;
    /** 改善类别名称 */
    improvementCategoryName?: string;
    /** 改善类别数量 */
    quantity?: number;
}
