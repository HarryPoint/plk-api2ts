import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getBaoJingCollectionTotalTableResultVOUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingCollectionSummaryAnalysisReportSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPageInformationBaojingCollectionSummaryAnalysisReportFormReturnedToVO>(
        {
            url: "/masterdata-service/baoJingReport/getBaoJingCollectionTotalTableResultVO",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶收款汇总分析报表搜索VO */
export interface IBaojingCollectionSummaryAnalysisReportSearchVO {
    /** 业务员id集 */
    businessUserIds?: string[];
    /** 收款组织 */
    collectionOrganization?: string;
    /** 客户id集 */
    customerIds?: string[];
    /** 日期-开始 yyyy-MM-dd HH:mm:ss */
    dateBegin?: number;
    /** 日期-结束 yyyy-MM-dd HH:mm:ss */
    dateEnd?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 付款单位id集(客户id) */
    payCustomerIds?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«宝晶收款汇总分析报表表格返回VO»» */
export interface IJSONResultPageInformationBaojingCollectionSummaryAnalysisReportFormReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPageInformationBaojingCollectionSummaryAnalysisReportFormReturnToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«宝晶收款汇总分析报表表格返回VO» */
export interface IPageInformationBaojingCollectionSummaryAnalysisReportFormReturnToVO {
    /** 是否有下一页 */
    hasNextPage?: EPageInformationBaojingCollectionSummaryAnalysisReportFormReturnToVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationBaojingCollectionSummaryAnalysisReportFormReturnToVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IBaojingCollectionSummaryAnalysisReportFormReturnedToVO[];
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
/** 宝晶收款汇总分析报表表格返回VO */
export interface IBaojingCollectionSummaryAnalysisReportFormReturnedToVO {
    /** 期初金额 */
    beginAmount?: number;
    /** 业务员id */
    businessUserId?: string;
    /** 业务员名称 */
    businessUserName?: string;
    /** 收款组织(部门名称) */
    collectionOrganization?: string;
    /** 收款组织id(部门id) */
    collectionOrganizationIds?: string[];
    /** 收款组织id(部门id) */
    collectionOrganizationIdsJson?: string;
    /** 客户id */
    customerId?: string;
    /** 客户名称 */
    customerName?: string;
    /** 是否含税 */
    isTax?: EBaojingCollectionSummaryAnalysisReportFormReturnedToVO_isTax;
    /** 其他损益 */
    otherLoss?: number;
    /** 付款单位id(客户id) */
    payCustomerIds?: string[];
    /** 付款单位id(客户id) */
    payCustomerIdsJson?: string;
    /** 付款单位名称(客户名称) */
    payCustomerName?: string;
    /** 应收金额 */
    receivableAmount?: number;
    /** 应收余额 */
    receivableBalance?: number;
    /** 已收金额 */
    receivedAmount?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationBaojingCollectionSummaryAnalysisReportFormReturnToVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationBaojingCollectionSummaryAnalysisReportFormReturnToVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EBaojingCollectionSummaryAnalysisReportFormReturnedToVO_isTax {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
