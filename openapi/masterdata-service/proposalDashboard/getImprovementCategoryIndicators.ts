import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/合理化建议综合看板相关/getImprovementCategoryIndicatorsUsingGET
export default function fetchMethod() {
    return http<IJSONResultImprovementCategoryIndicatorsResponseDTO>({
        url: "/masterdata-service/proposalDashboard/getImprovementCategoryIndicators",
        method: "get",
    });
}
// JSONResult«ImprovementCategoryIndicatorsResponseDTO»
export interface IJSONResultImprovementCategoryIndicatorsResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IImprovementCategoryIndicatorsResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ImprovementCategoryIndicatorsResponseDTO
export interface IImprovementCategoryIndicatorsResponseDTO {
    // 改善类别列表
    indicatorsList: IImprovementCategoryIndicatorsItemResponseDTO[];
}
// ImprovementCategoryIndicatorsItemResponseDTO
export interface IImprovementCategoryIndicatorsItemResponseDTO {
    // 改善类别ID
    improvementCategoryId: number;
    // 改善类别名称
    improvementCategoryName: string;
    // 改善类别数量
    quantity: number;
}
