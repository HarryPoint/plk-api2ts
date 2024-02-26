import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/盼盼上报统计/listReportStatisticUsingPOST
*/
export default function fetchMethod(data: IPanpanReportsStatisticsToQueryObjects, extraOptions?: any) {
    return http<IJSONResultListIndicatesTheResponseObjectForPanpanToReportStatistics>(
        {
            url: "/masterdata-service/panPanReportStatistic/listReportStatistic",
            method: "post",
            data,
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
    materialIds?: number[];
    /** 工序id集合 */
    processIds?: number[];
}
/** JSONResult«List«盼盼上报统计响应对象»» */
export interface IJSONResultListIndicatesTheResponseObjectForPanpanToReportStatistics {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPanpanReportsStatisticsOnResponseObjects[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 盼盼上报统计响应对象 */
export interface IPanpanReportsStatisticsOnResponseObjects {
    /** 物料id */
    materialId?: number;
    /** 物料名称 */
    materialName?: string;
    /** 物料编号 */
    materialCode?: string;
    /** 物料单位 */
    materialUnit?: string;
    /** 工序id */
    processId?: number;
    /** 工序名称 */
    processName?: string;
    /** 工序编号 */
    processCode?: string;
    /** 计划数 */
    totalPlanQuantity?: number;
    /** 出料数 */
    totalProduceQuantity?: number;
    /** 返工数 */
    totalBackQuantity?: number;
    /** 报废个数 */
    totalScrapQuantity?: number;
}
