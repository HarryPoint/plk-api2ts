import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/采购汇总报表相关/getPurchaseSummaryReportStatisticsUsingPOST
*/
export default function fetchMethod(options: { data: GetPurchaseSummaryReportStatistics }, extraOptions?: any) {
    return http<IJSONResultPurchaseSummaryReportTotalReturnedObjects>(
        {
            url: "/masterdata-service/purchaseSummaryReport/getPurchaseSummaryReportStatistics",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«采购汇总报表合计返回对象» */
export interface IJSONResultPurchaseSummaryReportTotalReturnedObjects {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPurchaseSummaryReportTotalReturnedObjects;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 采购汇总报表合计返回对象 */
export interface IPurchaseSummaryReportTotalReturnedObjects {
    /** 采购数量 */
    purchaseQuantity?: number;
    /** 采购金额 */
    purchaseAmount?: number;
}
