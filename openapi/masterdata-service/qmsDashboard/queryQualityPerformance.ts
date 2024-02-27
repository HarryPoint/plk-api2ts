import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/QMS大屏相关/queryQualityPerformanceUsingPOST
*/
export default function fetchMethod(options: { data: IQmsLargeScreenTimeIntervalRequest }, extraOptions?: any) {
    return http<IJSONResultListReturnTheQualityPerformanceEvaluationTableToTheDTO>(
        {
            url: "/masterdata-service/qmsDashboard/queryQualityPerformance",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** qms大屏时间区间请求 */
export interface IQmsLargeScreenTimeIntervalRequest {
    /** 查询日期的开始 */
    dateRangeBegin?: string;
    /** 查询日期的结束 */
    dateRangeEnd?: string;
    /** 查询日期区间类型 */
    dateRangeType?: EQmsLargeScreenTimeIntervalRequest_dateRangeType;
}
/** JSONResult«List«质量绩效评价表返回DTO»» */
export interface IJSONResultListReturnTheQualityPerformanceEvaluationTableToTheDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IQualityPerformanceEvaluationFormReturnedToDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 质量绩效评价表返回DTO */
export interface IQualityPerformanceEvaluationFormReturnedToDTO {
    /** 得分 */
    score?: number;
    /** 部门 */
    departmentName?: string;
}

export enum EQmsLargeScreenTimeIntervalRequest_dateRangeType {
    /** 年 */
    YEAR = "YEAR",
    /** 季度 */
    QUARTER = "QUARTER",
    /** 月 */
    MONTH = "MONTH"
}
