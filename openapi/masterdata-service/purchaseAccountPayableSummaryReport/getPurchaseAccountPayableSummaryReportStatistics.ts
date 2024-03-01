import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/应付账款汇总报表相关/getPurchaseAccountPayableSummaryReportStatisticsUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultAccountsPayableSummaryReturnObject>(
        {
            url: "/masterdata-service/purchaseAccountPayableSummaryReport/getPurchaseAccountPayableSummaryReportStatistics",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«应付账款汇总表返回对象» */
export interface IJSONResultAccountsPayableSummaryReturnObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IAccountsPayableSummaryReturnObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 应付账款汇总表返回对象 */
export interface IAccountsPayableSummaryReturnObject {
    /** 本期应付款 */
    accountsPayableAmount?: number;
    /** 期初应付款 */
    beginAccountsPayableAmount?: number;
    /** 期初预付款 */
    beginPrepaidAmount?: number;
    /** 供应商编号 */
    code?: string;
    /** 期末应付款 */
    endAccountsPayableAmount?: number;
    /** 期末预付款 */
    endPrepaidAmount?: number;
    /** 供应商名称 */
    name?: string;
    /** 本期已付款 */
    paymentAmount?: number;
    /** 本期已用预付款 */
    paymentPrepaidAmount?: number;
    /** 本期预付款 */
    prepaidAmount?: number;
}
