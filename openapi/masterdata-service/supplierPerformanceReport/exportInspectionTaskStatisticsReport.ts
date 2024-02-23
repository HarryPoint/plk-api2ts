import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/供应商绩效评价报表相关/exportInspectionTaskStatisticsReportUsingPOST_1
export default function fetchMethod(data: ExportInspectionTaskStatisticsReport) {
    return post<IJSONResultlong>({
      url: "/masterdata-service/supplierPerformanceReport/exportInspectionTaskStatisticsReport",
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
