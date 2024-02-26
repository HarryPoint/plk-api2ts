import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/销售明细报表相关/exportSalesDetailsReportUsingPOST
*/
export default function fetchMethod(options: { data: ExportSalesDetailsReport }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-mobile-web/api/app/mobile/salesDetailsReport/exportSalesDetailsReport",
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
