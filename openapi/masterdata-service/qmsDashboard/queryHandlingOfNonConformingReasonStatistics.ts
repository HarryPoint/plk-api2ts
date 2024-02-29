import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.139.107:16700/doc.html#/default/QMS大屏相关/queryHandlingOfNonConformingReasonStatisticsUsingGET
*/
export default function fetchMethod(options: { params: { dateBegin?: string; dateEnd?: string } }, extraOptions?: any) {
    return http<IJSONResultListLargeScreenUnqualifiedProductStatisticsRespondToTheDTOBasedOnTheCause>(
        {
            url: "/masterdata-service/qmsDashboard/queryHandlingOfNonConformingReasonStatistics",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«大屏不合格品统计按原因响应DTO»» */
export interface IJSONResultListLargeScreenUnqualifiedProductStatisticsRespondToTheDTOBasedOnTheCause {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ILargeScreenUnqualifiedProductStatisticsAccordingToTheReasonResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 大屏不合格品统计按原因响应DTO */
export interface ILargeScreenUnqualifiedProductStatisticsAccordingToTheReasonResponseDTO {
    /** 原因 */
    category?: string;
    /** 数量 */
    quantity?: number;
}
