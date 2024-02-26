import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/销售明细报表相关/getDifengSalesDetailsReportUsingPOST
*/
export default function fetchMethod(options: { data: GetDifengSalesDetailsReport }, extraOptions?: any) {
    return http<IJSONResultPageInformationSalesListReturnedObject>(
        {
            url: "/app-mobile-web/api/app/mobile/salesDetailsReport/getDifengSalesDetailsReport",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«销售明细表返回对象»» */
export interface IJSONResultPageInformationSalesListReturnedObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationSalesDetailsReturnObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«销售明细表返回对象» */
export interface IPageInformationSalesDetailsReturnObject {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ISalesDetailReturnObject[];
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
/** 销售明细表返回对象 */
export interface ISalesDetailReturnObject {
    /** 单据编号 */
    code?: string;
    /** 单据日期 */
    billDate?: string;
    /** 单据类型（SALES_OUT_ORDER:销售出库单,SALES_RETURN_ORDER:销售退货单） */
    billType?: string;
    /** 客户id */
    customerId?: number;
    /** 客户名称 */
    customerName?: string;
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
    /** 折后不含税单价 */
    priceWithDiscounted?: number;
    /** 销售收入 */
    amountWithDiscounted?: number;
    /** 销售单价 */
    priceWithDiscountedTax?: number;
    /** 销售金额 */
    amountWithDiscountedTax?: number;
    /** 税额 */
    taxAmount?: number;
    /** 本单应收 */
    orderAccountsReceivable?: number;
    /** 本单未收 */
    orderNotReceivable?: number;
    /** 出厂单价 */
    outFactoryUnitPrice?: number;
    /** 出厂成本 */
    outFactoryCost?: number;
    /** 出厂毛利 */
    outFactoryGrossProfit?: number;
    /** 出厂毛利率 */
    outFactoryGrossProfitRate?: number;
    /** 销售成本 */
    salesCost?: number;
    /** 销售毛利 */
    salesGrossProfit?: number;
    /** 毛利率 */
    salesGrossProfitRate?: number;
    /** 佣金单价 */
    commissionUnitPrice?: number;
    /** 佣金总额 */
    commissionAmount?: number;
    /** 代销 */
    consignment?: string;
    /** 发票类型 */
    invoiceType?: string;
    /** 发票类型 */
    invoiceTypeId?: number;
    /** 年份 */
    yearTime?: string;
    /** 中间商 */
    broker?: string;
    /** 分录备注 */
    entryNotes?: string;
    /** 市场价 */
    marketPrice?: number;
    /** 出厂价系数 */
    factoryPriceCoefficient?: number;
    /** 分类 */
    materialCategory?: string;
}
