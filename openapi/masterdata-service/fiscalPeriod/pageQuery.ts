import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/财务期间相关/pageQueryUsingPOST
*/
export default function fetchMethod(options: { data: IFinancialPeriodQueryRequest }, extraOptions?: any) {
    return http<IJSONResultPagingInformationFinancialPeriodQueryResponse>(
        {
            url: "/masterdata-service/fiscalPeriod/pageQuery",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 财务期间查询请求 */
export interface IFinancialPeriodQueryRequest {
    /** 结存状态列表 */
    balanceStatusList?: EFinancialPeriodQueryRequest_balanceStatusList_items[];
    /** 天数 - Begin */
    daysBegin?: number;
    /** 天数 - End */
    daysEnd?: number;
    /** 结束日期 - begin */
    endDateBegin?: number;
    /** 结束日期 - end */
    endDateEnd?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 期间 */
    periodList?: string[];
    /** 开始日期 - begin */
    startDateBegin?: number;
    /** 开始日期 - end */
    startDateEnd?: number;
    /** 开始月份 */
    startMonth?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«财务期间查询响应»» */
export interface IJSONResultPagingInformationFinancialPeriodQueryResponse {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationFinancialPeriodQueryResponse;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«财务期间查询响应» */
export interface IPagingInformationFinancialPeriodQueryResponse {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationFinancialPeriodQueryResponse_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationFinancialPeriodQueryResponse_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IFinancialPeriodQueryResponse[];
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
/** 财务期间查询响应 */
export interface IFinancialPeriodQueryResponse {
    /** 结存状态 */
    balanceStatus?: EFinancialPeriodQueryResponse_balanceStatus;
    /** 天数 */
    days?: number;
    /** 结束日期 */
    endDate?: number;
    /** ID */
    id?: string;
    /** 期间 */
    period?: string;
    /** 开始日期 */
    startDate?: number;
}

export enum EFinancialPeriodQueryRequest_balanceStatusList_items {
    UNBALANCED = "UNBALANCED",
    BALANCED = "BALANCED"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationFinancialPeriodQueryResponse_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationFinancialPeriodQueryResponse_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EFinancialPeriodQueryResponse_balanceStatus {
    /** 未结存 */
    UNBALANCED = "UNBALANCED",
    /** 已结存 */
    BALANCED = "BALANCED"
}
