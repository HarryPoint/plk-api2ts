import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/采购明细报表相关/getPurchaseDetailsReportUsingPOST
*/
export default function fetchMethod(data: GetPurchaseDetailsReport, extraOptions?: any) {
    return http<IJSONResultPageInformationProcurementDetailReturnedObject>(
        {
            url: "/masterdata-service/purchaseDetailsReport/getPurchaseDetailsReport",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«采购明细表返回对象»» */
export interface IJSONResultPageInformationProcurementDetailReturnedObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationProcurementDetailReturnObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«采购明细表返回对象» */
export interface IPageInformationProcurementDetailReturnObject {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IPurchaseDetailsReturnObject[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: string;
    /** 是否有下一页 */
    hasNextPage?: string;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 采购明细表返回对象 */
export interface IPurchaseDetailsReturnObject {
    /** 单据编号 */
    code?: string;
    /** 单据日期 */
    billDate?: string;
    /** 单据类型（PURCHASE_IN_ORDER:采购入库单,SALES_RETURN_ORDER:采购退货单） */
    billType?: string;
    /** 供应商id */
    supplierId?: number;
    /** 供应商名称 */
    supplierName?: string;
    /** 业务员id */
    businessUserId?: number;
    /** 业务员名称 */
    businessUserName?: string;
    /** 物料id */
    materialId?: number;
    /** 物料编号 */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 规格 */
    materialSpec?: string;
    /** 单位 */
    materialUnit?: string;
    /** 仓库id */
    storehouseId?: number;
    /** 仓库名称 */
    storehouseName?: string;
    /** 仓位id */
    warehouseId?: number;
    /** 仓位名称 */
    warehouseName?: string;
    /** 数量 */
    quantity?: number;
    /** 税率 */
    taxRate?: number;
    /** 含税单价 */
    priceWithTax?: number;
    /** 含税金额 */
    amountWithTax?: number;
    /** 折扣 */
    discount?: number;
    /** 采购单价 */
    priceWithDiscountedTax?: number;
    /** 采购金额 */
    amountWithDiscountedTax?: number;
    /** 税额 */
    taxAmount?: number;
    /** 本单应付 */
    orderAccountsPayable?: number;
    /** 本单未付 */
    orderNotPayable?: number;
    /** 是否开票 */
    isInvoice?: string;
    /** 开票金额 */
    invoiceAmount?: number;
    /** 未开票金额 */
    notInvoiceAmount?: number;
}
