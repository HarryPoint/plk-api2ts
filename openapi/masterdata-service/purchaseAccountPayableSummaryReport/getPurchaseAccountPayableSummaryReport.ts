import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/应付账款汇总报表相关/getPurchaseAccountPayableSummaryReportUsingPOST
*/
export default function fetchMethod(options: { data: GetPurchaseAccountPayableSummaryReport }, extraOptions?: any) {
    return http<IJSONResultPagingInformationAccountsPayableSummaryTableReturnObject>(
        {
            url: "/masterdata-service/purchaseAccountPayableSummaryReport/getPurchaseAccountPayableSummaryReport",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«应付账款汇总表返回对象»» */
export interface IJSONResultPagingInformationAccountsPayableSummaryTableReturnObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationAccountsPayableSummaryTableReturnsObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«应付账款汇总表返回对象» */
export interface IPageInformationAccountsPayableSummaryTableReturnsObject {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IAccountsPayableSummaryReturnObject[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 应付账款汇总表返回对象 */
export interface IAccountsPayableSummaryReturnObject {
    /** 供应商编号 */
    code?: string;
    /** 供应商名称 */
    name?: string;
    /** 期初预付款 */
    beginPrepaidAmount?: number;
    /** 期初应付款 */
    beginAccountsPayableAmount?: number;
    /** 本期预付款 */
    prepaidAmount?: number;
    /** 本期应付款 */
    accountsPayableAmount?: number;
    /** 本期已用预付款 */
    paymentPrepaidAmount?: number;
    /** 本期已付款 */
    paymentAmount?: number;
    /** 期末预付款 */
    endPrepaidAmount?: number;
    /** 期末应付款 */
    endAccountsPayableAmount?: number;
}
