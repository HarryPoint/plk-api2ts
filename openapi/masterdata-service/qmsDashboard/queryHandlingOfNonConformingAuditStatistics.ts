import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/QMS大屏相关/queryHandlingOfNonConformingAuditStatisticsUsingGET
*/
export default function fetchMethod(options: { params: { DateBegin?: string; DateEnd?: string } }, extraOptions?: any) {
    return http<IJSONResultLargeScreenNonconformingProductStatisticsRespondToDTOAccordingToTheTrialSituation>(
        {
            url: "/masterdata-service/qmsDashboard/queryHandlingOfNonConformingAuditStatistics",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«大屏不合格品统计按审理情况响应DTO» */
export interface IJSONResultLargeScreenNonconformingProductStatisticsRespondToDTOAccordingToTheTrialSituation {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ILargeScreenNonconformingProductStatisticsAccordingToTheTrialSituationResponseDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 大屏不合格品统计按审理情况响应DTO */
export interface ILargeScreenNonconformingProductStatisticsAccordingToTheTrialSituationResponseDTO {
    /** 已关闭数量 */
    completeQuantity?: number;
    /** 未关闭数量 */
    handlingQuantity?: number;
}
