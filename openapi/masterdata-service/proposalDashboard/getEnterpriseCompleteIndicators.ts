import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/合理化建议综合看板相关/getEnterpriseCompleteIndicatorsUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultEnterpriseIndicatorsResponseDTO>(
        {
            url: "/masterdata-service/proposalDashboard/getEnterpriseCompleteIndicators",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«EnterpriseIndicatorsResponseDTO» */
export interface IJSONResultEnterpriseIndicatorsResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEnterpriseIndicatorsResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** EnterpriseIndicatorsResponseDTO */
export interface IEnterpriseIndicatorsResponseDTO {
    /** 全公式提案数量 */
    proposalQuantity?: string;
    /** （部门年改善提案数量目标/12*当前月份） */
    proposalPlanQuantity?: number;
    /** 全公司提案完成率 */
    proposalCompleteRate?: number;
    /** 全公司已完成平均L/T */
    projectCompleteAvg?: number;
}
