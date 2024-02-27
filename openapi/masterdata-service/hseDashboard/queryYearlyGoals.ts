import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/HSE大屏相关/queryYearlyGoalsUsingPOST
*/
export default function fetchMethod(options: { data: IAnnualTargetQueryRequest }, extraOptions?: any) {
    return http<IJSONResultListAnnualTargetQueryResponse>(
        {
            url: "/masterdata-service/hseDashboard/queryYearlyGoals",
            method: "post",
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IAnnualTargetQueryResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 年度目标查询响应 */
export interface IAnnualTargetQueryResponse {
    /** 序号 */
    serialNumber?: string;
    /** 控制目标名称 */
    controlTargetName?: string;
    /** 目标 */
    targetValue?: string;
    /** 当前 */
    currentValue?: string;
}
