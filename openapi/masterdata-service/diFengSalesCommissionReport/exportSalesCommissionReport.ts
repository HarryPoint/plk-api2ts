import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/佣金与提成统计表（帝丰定制）/exportSalesCommissionReportUsingPOST
*/
export default function fetchMethod(data: ExportSalesCommissionReport, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/diFengSalesCommissionReport/exportSalesCommissionReport",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
