import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.139.107:16700/doc.html#/default/HSE大屏相关/queryEnergyConsumptionsUsingPOST
*/
export default function fetchMethod(options: { data: IEnergyConsumptionQueryRequest }, extraOptions?: any) {
    return http<IJSONResultListEnergyConsumptionQueryResponse>(
        {
            url: "/masterdata-service/hseDashboard/queryEnergyConsumptions",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 能源消耗查询请求 */
export interface IEnergyConsumptionQueryRequest {
    /** 查询日期的开始 */
    dateRangeBegin?: number;
    /** 查询日期的结束 */
    dateRangeEnd?: number;
}
/** JSONResult«List«能源消耗查询响应»» */
export interface IJSONResultListEnergyConsumptionQueryResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEnergyConsumptionQueryResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 能源消耗查询响应 */
export interface IEnergyConsumptionQueryResponse {
    /** ID */
    id?: string;
    /** 年份 */
    year?: string;
    /** 能源消耗总量（万吨标煤） */
    totalEnergyConsumption?: number;
    /** 万元产值综合耗能（吨/万元） */
    comprehensiveEnergyConsumption?: number;
}
