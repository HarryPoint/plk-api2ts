import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/应付账款汇总报表相关/getPurchaseAccountPayableSummaryReportUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultPagingInformationAccountsPayableSummaryTableReturnObject>(
        {
            url: "/masterdata-service/purchaseAccountPayableSummaryReport/getPurchaseAccountPayableSummaryReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«应付账款汇总表返回对象»» */
export interface IJSONResultPagingInformationAccountsPayableSummaryTableReturnObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationAccountsPayableSummaryTableReturnsObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«应付账款汇总表返回对象» */
export interface IPageInformationAccountsPayableSummaryTableReturnsObject {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationAccountsPayableSummaryTableReturnsObject_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationAccountsPayableSummaryTableReturnsObject_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IAccountsPayableSummaryReturnObject[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
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

export enum EPageInformationAccountsPayableSummaryTableReturnsObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationAccountsPayableSummaryTableReturnsObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
