import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/质量追溯/queryTableColumnUsingGET_1
*/
export default function fetchMethod(extraOptions?: any) {
    return http<IJSONResultListQualityTraceabilityReportTableColumnBO>(
        {
            url: "/masterdata-service/qualityTraceability/queryTableColumn",
            method: "get",
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
    ts?: number;
}
/** QualityTraceabilityReportTableColumnBO */
export interface IQualityTraceabilityReportTableColumnBO {
}
