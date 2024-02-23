import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/采购汇总报表相关/exportPurchaseSummaryReportUsingPOST
export default function fetchMethod(data: ExportPurchaseSummaryReport) {
    return http<IJSONResultlong>({
        url: "/masterdata-service/purchaseSummaryReport/exportPurchaseSummaryReport",
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
