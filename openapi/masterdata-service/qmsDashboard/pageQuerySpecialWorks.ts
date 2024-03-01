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
    /** 导出字段集 */
    exportFields?: string[];
    /** 汇总聚合维度字段集 */
    groupBys?: string[];
    /** 排序字段集 */
    orders?: IPagingSort[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
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
    /** 响应结果 */
    data?: IPagingInformationSpecialWorkQueryRequest;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«专项工作查询请求» */
export interface IPagingInformationSpecialWorkQueryRequest {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationSpecialWorkQueryRequest_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationSpecialWorkQueryRequest_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: ISpecialWorkInquiryRequest[];
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
/** 专项工作查询请求 */
export interface ISpecialWorkInquiryRequest {
    /** 完成率 */
    completedRate?: number;
    /** ID */
    id?: string;
    /** 计划完成数 */
    planCompletedQuantity?: number;
    /** 计划数 */
    planTotalQuantity?: number;
    /** 专项工作名称 */
    specialWorkName?: string;
}

export enum EPagingSort_isAsc {
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

export enum EPagingInformationSpecialWorkQueryRequest_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
