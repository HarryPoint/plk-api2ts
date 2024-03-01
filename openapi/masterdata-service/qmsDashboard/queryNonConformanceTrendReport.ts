import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/QMS大屏相关/queryNonConformanceTrendReportUsingPOST
*/
export default function fetchMethod(options: { data: INonConformanceTrendReportRequestDTO }, extraOptions?: any) {
    return http<IJSONResultDoesNotMatchTheProjectTrendReport>(
        {
            url: "/masterdata-service/qmsDashboard/queryNonConformanceTrendReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** NonConformanceTrendReportRequestDTO */
export interface INonConformanceTrendReportRequestDTO {
    /** 当前的时间 */
    currentYear?: number;
}
/** JSONResult«不符合项目趋势报告» */
export interface IJSONResultDoesNotMatchTheProjectTrendReport {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IDoesNotMatchTheProjectTrendReport;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 不符合项目趋势报告 */
export interface IDoesNotMatchTheProjectTrendReport {
    /** 外审 */
    externalAudit?: IQueryResponseOfNonMatchItems;
    /** 内审 */
    internalAudit?: IQueryResponseOfNonMatchItems;
    /** 专审 */
    specialAudit?: IQueryResponseOfNonMatchItems;
}
/** 不符合项查询响应 */
export interface IQueryResponseOfNonMatchItems {
    /** undefined */
    clauseNoList?: ITermsNumberQueryResponse[];
    /** undefined */
    currentYear?: Record<string, number>;
    /** undefined */
    lastYear?: Record<string, number>;
}
/** 条款号查询响应 */
export interface ITermsNumberQueryResponse {
    /** 条款号 */
    clauseNo?: string;
    /** ID */
    id?: string;
}
