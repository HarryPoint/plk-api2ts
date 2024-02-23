import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/销售日报表相关/exportDifengSalesDayReportUsingPOST
export default function fetchMethod(data: ExportDifengSalesDayReport) {
    return http<IJSONResultlong>({
        url: "/app-enterprise-web/api/app/enterprise/salesDayReport/exportDifengSalesDayReport",
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