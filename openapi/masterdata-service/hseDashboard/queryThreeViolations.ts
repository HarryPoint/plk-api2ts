import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/HSE大屏相关/queryThreeViolationsUsingPOST
*/
export default function fetchMethod(options: { data: I3DInformationQueryRequest }, extraOptions?: any) {
    return http<IJSONResultListResponseToQuerying3DInformation>(
        {
            url: "/masterdata-service/hseDashboard/queryThreeViolations",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 三维信息查询请求 */
export interface I3DInformationQueryRequest {
    /** 查询日期的开始 */
    dateRangeBegin?: number;
    /** 查询日期的结束 */
    dateRangeEnd?: number;
}
/** JSONResult«List«三维信息查询响应»» */
export interface IJSONResultListResponseToQuerying3DInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: I3DInformationQueryResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 三维信息查询响应 */
export interface I3DInformationQueryResponse {
    /** 违规Key */
    violationKey?: string;
    /** 违规名称 */
    violationName?: string;
    /** 整改完成数量 */
    rectificationQuantity?: number;
    /** 违规数量 */
    violationQuantity?: number;
    /** 整改完成率 = 整改完成数量 / 违规数量 */
    rectificationCompletionRare?: number;
}
