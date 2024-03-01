import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/盼盼上报统计/getAggregateResultUsingPOST
*/
export default function fetchMethod(options: { data: IPanpanReportsStatisticsToQueryObjects }, extraOptions?: any) {
    return http<IJSONResultReportStatisticsSummaryResponseObject>(
        {
            url: "/masterdata-service/panPanReportStatistic/getAggregateResult",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 盼盼上报统计查询对象 */
export interface IPanpanReportsStatisticsToQueryObjects {
    /** 查询开始时间 yyyy-MM-dd HH:mm:ss */
    beginTime: string;
    /** 查询结束时间 yyyy-MM-dd HH:mm:ss */
    endTime: string;
    /** 物料id集合 */
    materialIds?: string[];
    /** 工序id集合 */
    processIds?: string[];
}
/** JSONResult«盼盼上报统计汇总响应对象» */
export interface IJSONResultReportStatisticsSummaryResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPanpanReportsStatisticalSummaryResponseObjects;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 盼盼上报统计汇总响应对象 */
export interface IPanpanReportsStatisticalSummaryResponseObjects {
    /** 返工数 */
    totalBackQuantity?: number;
    /** 计划数 */
    totalPlanQuantity?: number;
    /** 出料数 */
    totalProduceQuantity?: number;
    /** 报废个数 */
    totalScrapQuantity?: number;
}
