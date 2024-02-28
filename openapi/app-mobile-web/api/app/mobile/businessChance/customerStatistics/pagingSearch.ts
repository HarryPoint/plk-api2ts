import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:17400/doc.html#/default/CRM-客户统计报表相关/pagingSearchCustomerStatisticsUsingPOST
*/
export default function fetchMethod(options: { data: ICustomerStatisticsInputConditions }, extraOptions?: any) {
    return http<IJSONResultPagingInformationCustomerStatistics>(
        {
            url: "/app-mobile-web/api/app/mobile/businessChance/customerStatistics/pagingSearch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 客户情况统计输入条件 */
export interface ICustomerStatisticsInputConditions {
    /** 客户ID列表 */
    customerIdList?: string[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 跟进ID列表 */
    salesOrderIdList?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«客户情况统计»» */
export interface IJSONResultPagingInformationCustomerStatistics {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationCustomerStatistics;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«客户情况统计» */
export interface IPageInformationCustomerStatistics {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ICustomerStatistics[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationCustomerStatistics_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationCustomerStatistics_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 客户情况统计 */
export interface ICustomerStatistics {
    /** 商机ID */
    businessChanceId?: string;
    /** 根据人ID */
    salesUserId?: string;
    /** 根据人名称 */
    saleUserName?: string;
    /** 客户ID */
    customerId?: string;
    /** 客户名称 */
    customerName?: string;
    /** 商机名称 */
    businessChanceName?: string;
    /** 创建商机时间 */
    businessChanceCreateTime?: number;
    /** 需求确认时间 */
    confirmRequireTime?: number;
    /** 历史需求确认时间集合 */
    historyConfirmRequireTimeList?: string[];
    /** 方案报价时间 */
    schemeQuotationTime?: number;
    /** 商务谈判时间 */
    businessNegotiationTime?: number;
    /** 历史商务谈判时间集合 */
    historyBusinessNegotiationTimeList?: string[];
    /** 合同签订时间 */
    contractSigningTime?: number;
    /** 回款时间 */
    paymentReturnTime?: number;
    /** 售后服务时间 */
    afterServiceTime?: number;
    /** 历史售后服务时间集合 */
    historyAfterServiceTimeList?: string[];
    /** 输单时间 */
    inputOrderTime?: number;
    /** 历史输单时间集合 */
    historyInputOrderTimeList?: string[];
    /** 无效时间 */
    invalidTime?: number;
    /** 历史无效时间集合 */
    historyInvalidTimeList?: string[];
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationCustomerStatistics_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationCustomerStatistics_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
