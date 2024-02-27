import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/QMS大屏相关/queryAllAnnualProblemSituationUsingPOST
*/
export default function fetchMethod(options: { data: IQmsLargeScreenTimeIntervalRequest }, extraOptions?: any) {
    return http<IJSONResultAnnualProblemQuery>(
        {
            url: "/masterdata-service/qmsDashboard/queryAllAnnualProblemSituation",
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
/** JSONResult«年度问题查询情况» */
export interface IJSONResultAnnualProblemQuery {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IAnnualQuestionQuery;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 年度问题查询情况 */
export interface IAnnualQuestionQuery {
}

export enum EQmsLargeScreenTimeIntervalRequest_dateRangeType {
    /** 年 */
    YEAR = "YEAR",
    /** 季度 */
    QUARTER = "QUARTER",
    /** 月 */
    MONTH = "MONTH"
}
