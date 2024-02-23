import { http } from '@/api/http';

// http://47.108.139.107:17400/doc.html#/default/采购汇总报表相关/getPurchaseSummaryReportUsingPOST
export default function fetchMethod(data: GetPurchaseSummaryReport) {
    return http<IJSONResultObjectReturnedByThePagingInformationProcurementSummaryReport>({
        url: "/app-mobile-web/api/app/mobile/purchaseSummaryReport/getPurchaseSummaryReport",
        method: "post",
        data,
    });
}
// JSONResult«分页信息«采购汇总报表返回对象»»
export interface IJSONResultObjectReturnedByThePagingInformationProcurementSummaryReport {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPageInformationPurchaseSummaryReportReturnsObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«采购汇总报表返回对象»
export interface IPageInformationPurchaseSummaryReportReturnsObject {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IThePurchaseSummaryReportReturnsObjects[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// 采购汇总报表返回对象
export interface IThePurchaseSummaryReportReturnsObjects {
    // 物料id
    materialId: number;
    // 供应商id
    supplierId: number;
    // 供应商Code
    supplierCode: string;
    // 供应商名称
    supplierName: string;
    // 物料编号
    materialCode: string;
    // 物料名称
    materialName: string;
    // 规格
    materialSpec: string;
    // 单位
    materialUnit: string;
    // 入库数量
    inStorageQuantity: number;
    // 入库金额
    inStorageAmount: number;
    // 退货数量
    returnStorageQuantity: number;
    // 退货金额
    returnStorageAmount: number;
    // 采购数量
    purchaseQuantity: number;
    // 采购金额
    purchaseAmount: number;
    // 退货率
    returnRate: number;
}
