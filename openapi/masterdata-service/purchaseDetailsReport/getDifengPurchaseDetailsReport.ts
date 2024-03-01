import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/采购明细报表相关/getDifengPurchaseDetailsReportUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultPageInformationProcurementDetailReturnedObject>(
        {
            url: "/masterdata-service/purchaseDetailsReport/getDifengPurchaseDetailsReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«采购明细表返回对象»» */
export interface IJSONResultPageInformationProcurementDetailReturnedObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationProcurementDetailReturnObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«采购明细表返回对象» */
export interface IPageInformationProcurementDetailReturnObject {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationProcurementDetailReturnObject_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationProcurementDetailReturnObject_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IPurchaseDetailsReturnObject[];
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
/** 采购明细表返回对象 */
export interface IPurchaseDetailsReturnObject {
    /** 采购金额 */
    amountWithDiscountedTax?: number;
    /** 含税金额 */
    amountWithTax?: number;
    /** 单据日期 */
    billDate?: number;
    /** 单据类型（PURCHASE_IN_ORDER:采购入库单,SALES_RETURN_ORDER:采购退货单） */
    billType?: string;
    /** 业务员id */
    businessUserId?: string;
    /** 业务员名称 */
    businessUserName?: string;
    /** 单据编号 */
    code?: string;
    /** 折扣 */
    discount?: number;
    /** 开票金额 */
    invoiceAmount?: number;
    /** 是否开票 */
    isInvoice?: string;
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
    /** 未开票金额 */
    notInvoiceAmount?: number;
    /** 本单应付 */
    orderAccountsPayable?: number;
    /** 本单未付 */
    orderNotPayable?: number;
    /** 采购单价 */
    priceWithDiscountedTax?: number;
    /** 含税单价 */
    priceWithTax?: number;
    /** 数量 */
    quantity?: number;
    /** 仓库id */
    storehouseId?: string;
    /** 仓库名称 */
    storehouseName?: string;
    /** 供应商id */
    supplierId?: string;
    /** 供应商名称 */
    supplierName?: string;
    /** 税额 */
    taxAmount?: number;
    /** 税率 */
    taxRate?: number;
    /** 仓位id */
    warehouseId?: string;
    /** 仓位名称 */
    warehouseName?: string;
}

export enum EPageInformationProcurementDetailReturnObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationProcurementDetailReturnObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
