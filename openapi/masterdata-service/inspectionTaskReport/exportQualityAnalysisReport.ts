import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/检验任务统计报表相关/exportQualityAnalysisReportUsingPOST
*/
export default function fetchMethod(options: { data: ExportQualityAnalysisReport }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/inspectionTaskReport/exportQualityAnalysisReport",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
