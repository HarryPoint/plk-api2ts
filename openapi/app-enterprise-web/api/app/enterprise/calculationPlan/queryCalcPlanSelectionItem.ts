import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/计算方案相关/queryCalcPlanSelectionItemUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListCalcPlanSelectionItemQueryResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/calculationPlan/queryCalcPlanSelectionItem",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«CalcPlanSelectionItemQueryResponseDTO»» */
export interface IJSONResultListCalcPlanSelectionItemQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ICalcPlanSelectionItemQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** CalcPlanSelectionItemQueryResponseDTO */
export interface ICalcPlanSelectionItemQueryResponseDTO {
    /** ID */
    id?: string;
    /** 方案名称 */
    name?: string;
}
