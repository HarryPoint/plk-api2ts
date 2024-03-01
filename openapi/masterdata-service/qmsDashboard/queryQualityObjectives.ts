import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/QMS大屏相关/queryQualityObjectivesUsingPOST
*/
export default function fetchMethod(options: { data: IQmsLargeScreenTimeIntervalRequest }, extraOptions?: any) {
    return http<IJSONResultListTheQualityTargetReturnsTheDTO>(
        {
            url: "/masterdata-service/qmsDashboard/queryQualityObjectives",
            method: "POST",
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
/** JSONResult«List«质量目标返回DTO»» */
export interface IJSONResultListTheQualityTargetReturnsTheDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheQualityTargetReturnsTheDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 质量目标返回DTO */
export interface ITheQualityTargetReturnsTheDTO {
    /** 质量目标 */
    name?: string;
    /** q1实际值 */
    q1?: string;
    /** q2实际值 */
    q2?: string;
    /** q3实际值 */
    q3?: string;
    /** q4实际值 */
    q4?: string;
    /** 定性目标值 */
    qualitativeTargetValue?: string;
    /** 定量目标值 */
    quantifyTargetValue?: string;
    /** 目标值类型 */
    targetType?: ETheQualityTargetReturnsTheDTO_targetType;
}

export enum EQmsLargeScreenTimeIntervalRequest_dateRangeType {
    /** 年 */
    YEAR = "YEAR",
    /** 季度 */
    QUARTER = "QUARTER",
    /** 月 */
    MONTH = "MONTH"
}

export enum ETheQualityTargetReturnsTheDTO_targetType {
    /** 定性目标 */
    QUALITATIVE_OBJECTIVE = "QUALITATIVE_OBJECTIVE",
    /** 定量目标 */
    QUANTITATIVE_OBJECTIVE = "QUANTITATIVE_OBJECTIVE"
}
