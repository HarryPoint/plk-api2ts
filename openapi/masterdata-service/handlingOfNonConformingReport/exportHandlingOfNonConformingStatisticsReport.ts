import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/不合格统计报表相关/exportHandlingOfNonConformingStatisticsReportUsingPOST
export default function fetchMethod(data: ExportHandlingOfNonConformingStatisticsReport) {
    return http<IJSONResultlong>({
        url: "/masterdata-service/handlingOfNonConformingReport/exportHandlingOfNonConformingStatisticsReport",
        method: "post",
        data,
    });
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
