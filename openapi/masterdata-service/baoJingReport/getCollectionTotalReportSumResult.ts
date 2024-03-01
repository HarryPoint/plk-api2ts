import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getCollectionTotalReportSumResultUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingCollectionSummaryAnalysisReportSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultBaojingCollectionSummaryAnalysisReportFormReturnedToVO>(
        {
            url: "/masterdata-service/baoJingReport/getCollectionTotalReportSumResult",
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
/** JSONResult«宝晶收款汇总分析报表表格返回VO» */
export interface IJSONResultBaojingCollectionSummaryAnalysisReportFormReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBaojingCollectionSummaryAnalysisReportFormReturnedToVO1;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 宝晶收款汇总分析报表表格返回VO_1 */
export interface IBaojingCollectionSummaryAnalysisReportFormReturnedToVO1 {
    /** 应收金额 */
    receivableAmountSum?: number;
    /** 应收余额 */
    receivableBalanceSum?: number;
    /** 已收金额 */
    receivedAmountSum?: number;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
