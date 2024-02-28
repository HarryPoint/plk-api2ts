import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/QMS大屏相关/pageQuerySpecialWorksUsingPOST
*/
export default function fetchMethod(options: { data: ISpecialWorkQueryRequest1 }, extraOptions?: any) {
    return http<IJSONResultSpecialTaskQueryRequestForPagingInformation>(
        {
            url: "/masterdata-service/qmsDashboard/pageQuerySpecialWorks",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 专项工作查询请求_1 */
export interface ISpecialWorkQueryRequest1 {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 导出字段集 */
    exportFields?: string[];
}
/** 分页排序 */
export interface IPagingSort {
    /** 需要进行排序的字段 */
    column?: string;
    /** 是否正序排列，默认Y */
    isAsc?: EPagingSort_isAsc;
}
/** JSONResult«分页信息«专项工作查询请求»» */
export interface IJSONResultSpecialTaskQueryRequestForPagingInformation {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationSpecialWorkQueryRequest;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«专项工作查询请求» */
export interface IPagingInformationSpecialWorkQueryRequest {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ISpecialWorkInquiryRequest[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationSpecialWorkQueryRequest_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationSpecialWorkQueryRequest_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 专项工作查询请求 */
export interface ISpecialWorkInquiryRequest {
    /** ID */
    id?: string;
    /** 专项工作名称 */
    specialWorkName?: string;
    /** 计划数 */
    planTotalQuantity?: number;
    /** 计划完成数 */
    planCompletedQuantity?: number;
    /** 完成率 */
    completedRate?: number;
}

export enum EPagingSort_isAsc {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationSpecialWorkQueryRequest_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationSpecialWorkQueryRequest_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
