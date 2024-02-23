import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/宝晶报表相关/getCollectionTotalReportSumResultUsingPOST
export default function fetchMethod(data: IBaojingCollectionSummaryAnalysisReportSearchVO, params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultBaojingCollectionSummaryAnalysisReportFormReturnedToVO>(
        {
            url: "/masterdata-service/baoJingReport/getCollectionTotalReportSumResult",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
// 宝晶收款汇总分析报表搜索VO
export interface IBaojingCollectionSummaryAnalysisReportSearchVO {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 业务员id集
    businessUserIds: number[];
    // 排序字段集
    orders: IPagingSortVO[];
    // 客户id集
    customerIds: number[];
    // 日期-开始 yyyy-MM-dd HH:mm:ss
    dateBegin: string;
    // 付款单位id集(客户id)
    payCustomerIds: number[];
    // 收款组织
    collectionOrganization: string;
    // 日期-结束 yyyy-MM-dd HH:mm:ss
    dateEnd: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«宝晶收款汇总分析报表表格返回VO»
export interface IJSONResultBaojingCollectionSummaryAnalysisReportFormReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IBaojingCollectionSummaryAnalysisReportFormReturnedToVO1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 宝晶收款汇总分析报表表格返回VO_1
export interface IBaojingCollectionSummaryAnalysisReportFormReturnedToVO1 {
    // 应收金额
    receivableAmountSum: number;
    // 已收金额
    receivedAmountSum: number;
    // 应收余额
    receivableBalanceSum: number;
}
