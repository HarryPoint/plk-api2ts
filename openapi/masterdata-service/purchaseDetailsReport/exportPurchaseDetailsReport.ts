import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/采购明细报表相关/exportPurchaseDetailsReportUsingPOST
*/
export default function fetchMethod(data: ExportPurchaseDetailsReport, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/purchaseDetailsReport/exportPurchaseDetailsReport",
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
