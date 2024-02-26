import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/不合格统计报表相关/getHandlingOfNonConformingStatisticsAmountReportUsingPOST
*/
export default function fetchMethod(data: GetHandlingOfNonConformingStatisticsAmountReport, extraOptions?: any) {
    return http<IJSONResultTotalUnqualifiedReportsAreReturnedToTheDTO>(
        {
            url: "/masterdata-service/handlingOfNonConformingReport/getHandlingOfNonConformingStatisticsAmountReport",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** JSONResult«不合格报表合计返回DTO» */
export interface IJSONResultTotalUnqualifiedReportsAreReturnedToTheDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITotalNonconformingReportsAreReturnedToTheDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 不合格报表合计返回DTO */
export interface ITotalNonconformingReportsAreReturnedToTheDTO {
    /** 不合格数量 */
    quantityOfNonConformance?: number;
}
