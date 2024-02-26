import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/采购明细报表相关/getPurchaseDetailsReportStatisticsUsingPOST
*/
export default function fetchMethod(options: { data: GetPurchaseDetailsReportStatistics }, extraOptions?: any) {
    return http<IJSONResultPurchaseDetailsStatisticsReturnedObject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/purchaseDetailsReport/getPurchaseDetailsReportStatistics",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«采购明细表统计返回对象» */
export interface IJSONResultPurchaseDetailsStatisticsReturnedObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPurchaseDetailsStatisticsReturnedObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 采购明细表统计返回对象 */
export interface IPurchaseDetailsStatisticsReturnedObject {
    /** 数量 */
    quantity?: number;
    /** 含税金额 */
    amountWithTax?: number;
    /** 采购金额 */
    amountWithDiscountedTax?: number;
}
