import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/不合格统计报表相关/getHandlingOfNonConformingStatisticsAmountReportUsingPOST
*/
export default function fetchMethod(options: { data: any }, extraOptions?: any) {
    return http<IJSONResultTotalUnqualifiedReportsAreReturnedToTheDTO>(
        {
            url: "/masterdata-service/handlingOfNonConformingReport/getHandlingOfNonConformingStatisticsAmountReport",
            method: "POST",
            ...options,
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
    ts?: string;
}
/** 不合格报表合计返回DTO */
export interface ITotalNonconformingReportsAreReturnedToTheDTO {
    /** 不合格数量 */
    quantityOfNonConformance?: number;
}
