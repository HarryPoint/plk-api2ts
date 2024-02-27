import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/销售日报表相关/getSalesDayReportUsingPOST
*/
export default function fetchMethod(options: { data: GetSalesDayReport }, extraOptions?: any) {
    return http<IJSONResultPageInformationObjectReturnedByTheSalesDailyReport>(
        {
            url: "/masterdata-service/salesDayReport/getSalesDayReport",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«销售日报表返回对象»» */
export interface IJSONResultPageInformationObjectReturnedByTheSalesDailyReport {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationObjectsReturnedByTheSalesDailyReport;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«销售日报表返回对象» */
export interface IPageInformationObjectsReturnedByTheSalesDailyReport {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IDailySalesReportReturnsObject[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationObjectsReturnedByTheSalesDailyReport_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationObjectsReturnedByTheSalesDailyReport_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 销售日报表返回对象 */
export interface IDailySalesReportReturnsObject {
    /** 物料id */
    materialId?: string;
    /** 客户id */
    customerId?: string;
    /** 客户Code */
    customerCode?: string;
    /** 客户名称 */
    customerName?: string;
    /** 部门id */
    departmentId?: string;
    /** 部门Code */
    departmentCode?: string;
    /** 部门名称 */
    departmentName?: string;
    /** 业务员id */
    businessUserId?: string;
    /** 业务员Code */
    businessUserCode?: string;
    /** 业务员名称 */
    businessUserName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料名称 */
    materialName?: string;
    /** 规格 */
    materialSpec?: string;
    /** 单位 */
    materialUnit?: string;
    /** 出库数量 */
    outStorageQuantity?: number;
    /** 出库金额 */
    outStorageAmount?: number;
    /** 退货数量 */
    returnStorageQuantity?: number;
    /** 退货金额 */
    returnStorageAmount?: number;
    /** 销售数量 */
    salesQuantity?: number;
    /** 销售金额 */
    salesAmount?: number;
    /** 销售积分 */
    salesIntegral?: number;
    /** 退货率 */
    returnRate?: number;
}

export enum EPageInformationObjectsReturnedByTheSalesDailyReport_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationObjectsReturnedByTheSalesDailyReport_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
