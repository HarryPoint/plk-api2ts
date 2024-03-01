import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/HSE大屏相关/queryYearlyGoalsUsingPOST
*/
export default function fetchMethod(options: { data: IAnnualTargetQueryRequest }, extraOptions?: any) {
    return http<IJSONResultListAnnualTargetQueryResponse>(
        {
            url: "/masterdata-service/hseDashboard/queryYearlyGoals",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 年度目标查询请求 */
export interface IAnnualTargetQueryRequest {
    /** 查询日期的开始 */
    dateRangeBegin?: number;
    /** 查询日期的结束 */
    dateRangeEnd?: number;
}
/** JSONResult«List«年度目标查询响应»» */
export interface IJSONResultListAnnualTargetQueryResponse {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IAnnualTargetQueryResponse[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 年度目标查询响应 */
export interface IAnnualTargetQueryResponse {
    /** 控制目标名称 */
    controlTargetName?: string;
    /** 当前 */
    currentValue?: string;
    /** 序号 */
    serialNumber?: string;
    /** 目标 */
    targetValue?: string;
}
