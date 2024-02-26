import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/QMS大屏相关/pageQuerySpecialWorksUsingPOST
*/
export default function fetchMethod(options: { data: ISpecialWorkQueryRequest1 }, extraOptions?: any) {
    return http<IJSONResultSpecialTaskQueryRequestForPagingInformation>(
        {
            url: "/masterdata-service/qmsDashboard/pageQuerySpecialWorks",
            method: "post",
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
    isAsc?: string;
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
    ts?: number;
}
/** 分页信息«专项工作查询请求» */
export interface IPagingInformationSpecialWorkQueryRequest {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ISpecialWorkInquiryRequest[];
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
/** 专项工作查询请求 */
export interface ISpecialWorkInquiryRequest {
    /** ID */
    id?: number;
    /** 专项工作名称 */
    specialWorkName?: string;
    /** 计划数 */
    planTotalQuantity?: number;
    /** 计划完成数 */
    planCompletedQuantity?: number;
    /** 完成率 */
    completedRate?: number;
}
