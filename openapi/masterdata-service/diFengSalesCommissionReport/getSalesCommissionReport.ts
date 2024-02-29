import { http } from "@/api/http";

/**
* @author Mao Hai Ping
* @link http://47.108.139.107:16700/doc.html#/default/佣金与提成统计表（帝丰定制）/getSalesCommissionReportUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultPagingInformationCommissionAndCommissionStatisticsTableTyfungCustomizedResponseObject>(
        {
            url: "/masterdata-service/diFengSalesCommissionReport/getSalesCommissionReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«分页信息«佣金与提成统计表（帝丰定制）响应对象»» */
export interface IJSONResultPagingInformationCommissionAndCommissionStatisticsTableTyfungCustomizedResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationCommissionAndCommissionStatisticsTableDifengCustomizedResponseObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«佣金与提成统计表（帝丰定制）响应对象» */
export interface IPagingInformationCommissionAndCommissionStatisticsTableDifengCustomizedResponseObject {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ICommissionAndCommissionStatisticsTableDifengCustomizedResponseObject[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationCommissionAndCommissionStatisticsTableDifengCustomizedResponseObject_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationCommissionAndCommissionStatisticsTableDifengCustomizedResponseObject_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 佣金与提成统计表（帝丰定制）响应对象 */
export interface ICommissionAndCommissionStatisticsTableDifengCustomizedResponseObject {
    /** 业务员id */
    businessUserId?: string;
    /** 业务员名称 */
    businessUserName?: string;
    /** 客户id */
    customerId?: string;
    /** 客户名称 */
    customerName?: string;
    /** 其他应付单号 */
    otherPayableCode?: string;
    /** 挂账金额 */
    registeredQuantity?: string;
    /** 冲款金额 */
    chargebackQuantity?: string;
    /** 未付金额 */
    unpaidQuantity?: string;
    /** 销售出库单号 */
    salesOutStorageOrderCode?: string;
    /** 销售出库单id */
    salesOutStorageOrderId?: string;
    /** 销售金额 */
    saleQuantity?: string;
    /** 已收金额 */
    receivedQuantity?: string;
}

export enum EPagingInformationCommissionAndCommissionStatisticsTableDifengCustomizedResponseObject_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationCommissionAndCommissionStatisticsTableDifengCustomizedResponseObject_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
