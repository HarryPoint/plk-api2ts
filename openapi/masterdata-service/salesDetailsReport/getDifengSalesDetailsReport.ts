import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/销售明细报表相关/getDifengSalesDetailsReportUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultPageInformationSalesListReturnedObject>(
        {
            url: "/masterdata-service/salesDetailsReport/getDifengSalesDetailsReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«销售明细表返回对象»» */
export interface IJSONResultPageInformationSalesListReturnedObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationSalesDetailsReturnObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«销售明细表返回对象» */
export interface IPageInformationSalesDetailsReturnObject {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationSalesDetailsReturnObject_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationSalesDetailsReturnObject_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: ISalesDetailReturnObject[];
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
/** 销售明细表返回对象 */
export interface ISalesDetailReturnObject {
    /** 销售收入 */
    amountWithDiscounted?: number;
    /** 销售金额 */
    amountWithDiscountedTax?: number;
    /** 含税金额 */
    amountWithTax?: number;
    /** 单据日期 */
    billDate?: number;
    /** 单据类型（SALES_OUT_ORDER:销售出库单,SALES_RETURN_ORDER:销售退货单） */
    billType?: string;
    /** 中间商 */
    broker?: string;
    /** 业务员id */
    businessUserId?: string;
    /** 业务员名称 */
    businessUserName?: string;
    /** 单据编号 */
    code?: string;
    /** 佣金总额 */
    commissionAmount?: number;
    /** 佣金单价 */
    commissionUnitPrice?: number;
    /** 代销 */
    consignment?: string;
    /** 客户id */
    customerId?: string;
    /** 客户名称 */
    customerName?: string;
    /** 折扣 */
    discount?: number;
    /** 分录备注 */
    entryNotes?: string;
    /** 出厂价系数 */
    factoryPriceCoefficient?: number;
    /** 发票类型 */
    invoiceType?: string;
    /** 发票类型 */
    invoiceTypeId?: string;
    /** 市场价 */
    marketPrice?: number;
    /** 分类 */
    materialCategory?: string;
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
    /** 本单应收 */
    orderAccountsReceivable?: number;
    /** 本单未收 */
    orderNotReceivable?: number;
    /** 出厂成本 */
    outFactoryCost?: number;
    /** 出厂毛利 */
    outFactoryGrossProfit?: number;
    /** 出厂毛利率 */
    outFactoryGrossProfitRate?: number;
    /** 出厂单价 */
    outFactoryUnitPrice?: number;
    /** 折后不含税单价 */
    priceWithDiscounted?: number;
    /** 销售单价 */
    priceWithDiscountedTax?: number;
    /** 含税单价 */
    priceWithTax?: number;
    /** 数量 */
    quantity?: number;
    /** 销售成本 */
    salesCost?: number;
    /** 销售毛利 */
    salesGrossProfit?: number;
    /** 毛利率 */
    salesGrossProfitRate?: number;
    /** 仓库id */
    storehouseId?: string;
    /** 仓库名称 */
    storehouseName?: string;
    /** 税额 */
    taxAmount?: number;
    /** 税率 */
    taxRate?: number;
    /** 仓位id */
    warehouseId?: string;
    /** 仓位名称 */
    warehouseName?: string;
    /** 年份 */
    yearTime?: number;
}

export enum EPageInformationSalesDetailsReturnObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationSalesDetailsReturnObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
