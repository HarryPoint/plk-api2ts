import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/检验任务统计报表相关/getQualityAnalysisAmountReportUsingPOST
*/
export default function fetchMethod(data: GetQualityAnalysisAmountReport, extraOptions?: any) {
    return http<IJSONResultTotalQualityStatisticalAnalysisReportReturnedToDTO>(
        {
            url: "/masterdata-service/inspectionTaskReport/getQualityAnalysisAmountReport",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** JSONResult«质量统计分析报表合计返回DTO» */
export interface IJSONResultTotalQualityStatisticalAnalysisReportReturnedToDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IQualityStatisticalAnalysisReportTotalReturnToDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 质量统计分析报表合计返回DTO */
export interface IQualityStatisticalAnalysisReportTotalReturnToDTO {
    /** 报检数量 */
    inspectionApplyQuantity: number;
    /** 交检总数 */
    inspectionQuantity: number;
    /** 交检合格数 */
    qualifiedQuantity: number;
    /** 交检不合格数 */
    unQualifiedQuantity: number;
}
