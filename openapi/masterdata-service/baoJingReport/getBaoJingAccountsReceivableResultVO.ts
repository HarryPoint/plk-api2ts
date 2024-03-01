import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶报表相关/getBaoJingAccountsReceivableResultVOUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingAccountsReceivableAnalysisReportSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultBaoJingAccountsReceivableAnalysisReportReturnedToVO>(
        {
            url: "/masterdata-service/baoJingReport/getBaoJingAccountsReceivableResultVO",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶应收账款分析报表搜索VO */
export interface IBaojingAccountsReceivableAnalysisReportSearchVO {
    /** 业务员id集 */
    businessUserIds?: string[];
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
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«宝晶应收账款分析报表返回VO» */
export interface IJSONResultBaoJingAccountsReceivableAnalysisReportReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBaojingAccountsReceivableAnalysisReportReturnedToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 宝晶应收账款分析报表返回VO */
export interface IBaojingAccountsReceivableAnalysisReportReturnedToVO {
    /** 业务员维度 */
    businessUser?: IBaojingAccountsReceivableAnalysisReportChartReturnedToVO[];
    /** 数据表 */
    tables?: IBaojingAccountsReceivableAnalysisReportFormReturnedToVO[];
    /** 趋势图维度 */
    trendChart?: IBaojingAccountsReceivableAnalysisReportChartWithTimeReturnToVO[];
}
/** 宝晶应收账款分析报表图表返回VO */
export interface IBaojingAccountsReceivableAnalysisReportChartReturnedToVO {
    /** 应收余额 */
    amount?: number;
    /** x轴名称 */
    title?: string;
}
/** 宝晶应收账款分析报表表格返回VO */
export interface IBaojingAccountsReceivableAnalysisReportFormReturnedToVO {
    /** 期初金额 */
    beginAmount?: number;
    /** 业务员id */
    businessUserId?: string;
    /** 业务员名称 */
    businessUserName?: string;
    /** 客户id */
    customerId?: string;
    /** 客户名称 */
    customerName?: string;
    /** 日期 */
    dateTime?: string;
    /** 入库总额 */
    moveInAmount?: number;
    /** 其他损益 */
    otherLossAmount?: number;
    /** 应收余额 */
    receivableBalance?: number;
    /** 已收金额 */
    receivedAmount?: number;
}
/** 宝晶应收账款分析报表图表含时间返回VO */
export interface IBaojingAccountsReceivableAnalysisReportChartWithTimeReturnToVO {
    /** 应收余额 */
    receivableBalance?: number;
    /** 时间 */
    time?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
