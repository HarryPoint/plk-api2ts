import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/采购汇总报表相关/getPurchaseSummaryReportUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultObjectReturnedByThePagingInformationProcurementSummaryReport>(
        {
            url: "/masterdata-service/purchaseSummaryReport/getPurchaseSummaryReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«采购汇总报表返回对象»» */
export interface IJSONResultObjectReturnedByThePagingInformationProcurementSummaryReport {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationPurchaseSummaryReportReturnsObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«采购汇总报表返回对象» */
export interface IPageInformationPurchaseSummaryReportReturnsObject {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationPurchaseSummaryReportReturnsObject_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationPurchaseSummaryReportReturnsObject_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IThePurchaseSummaryReportReturnsObjects[];
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
/** 采购汇总报表返回对象 */
export interface IThePurchaseSummaryReportReturnsObjects {
    /** 入库金额 */
    inStorageAmount?: number;
    /** 入库数量 */
    inStorageQuantity?: number;
    /** 物料编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 规格 */
    materialSpec?: string;
    /** 单位 */
    materialUnit?: string;
    /** 采购金额 */
    purchaseAmount?: number;
    /** 采购数量 */
    purchaseQuantity?: number;
    /** 退货率 */
    returnRate?: number;
    /** 退货金额 */
    returnStorageAmount?: number;
    /** 退货数量 */
    returnStorageQuantity?: number;
    /** 供应商Code */
    supplierCode?: string;
    /** 供应商id */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
}

export enum EPageInformationPurchaseSummaryReportReturnsObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationPurchaseSummaryReportReturnsObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
