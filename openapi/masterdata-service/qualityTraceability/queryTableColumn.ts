import { http } from "@/api/http";

/**
* @author Tan Peng
* @link http://47.108.135.148:16700/doc.html#/default/质量追溯/queryTableColumnUsingGET_1
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListQualityTraceabilityReportTableColumnBO>(
        {
            url: "/masterdata-service/qualityTraceability/queryTableColumn",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«QualityTraceabilityReportTableColumnBO»» */
export interface IJSONResultListQualityTraceabilityReportTableColumnBO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IQualityTraceabilityReportTableColumnBO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** QualityTraceabilityReportTableColumnBO */
export interface IQualityTraceabilityReportTableColumnBO {
}
