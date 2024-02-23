import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/计算方案相关/queryCalcPlanSelectionItemUsingGET
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultListCalcPlanSelectionItemQueryResponseDTO>(
        {
            url: "/flow-service/calculationPlan/queryCalcPlanSelectionItem",
            method: "get",
        },
        extraOptions,
    );
}
// JSONResult«List«CalcPlanSelectionItemQueryResponseDTO»»
export interface IJSONResultListCalcPlanSelectionItemQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ICalcPlanSelectionItemQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// CalcPlanSelectionItemQueryResponseDTO
export interface ICalcPlanSelectionItemQueryResponseDTO {
    // ID
    id: number;
    // 方案名称
    name: string;
}
