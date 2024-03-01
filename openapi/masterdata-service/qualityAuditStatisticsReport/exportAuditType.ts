import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/质量审核统计表/exportAuditTypeUsingPOST
*/
export default function fetchMethod(options: { data: IBasicQualityAuditQueryRequest1 }, extraOptions?: any) {
    return http<IJSONResultLong>(
        {
            url: "/masterdata-service/qualityAuditStatisticsReport/exportAuditType",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 基础质量审核查询请求_1 */
export interface IBasicQualityAuditQueryRequest1 {
    /** 日期范围-起始 */
    dateRangeBegin?: number;
    /** 日期范围-结束 */
    dateRangeEnd?: number;
}
/** JSONResult«long» */
export interface IJSONResultLong {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
