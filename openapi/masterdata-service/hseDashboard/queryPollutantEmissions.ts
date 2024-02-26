import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/HSE大屏相关/queryPollutantEmissionsUsingPOST
*/
export default function fetchMethod(data: IPollutantQueryRequest, extraOptions?: any) {
    return http<IJSONResultListPollutantQueryResponse>(
        {
            url: "/masterdata-service/hseDashboard/queryPollutantEmissions",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 污染物查询请求 */
export interface IPollutantQueryRequest {
    /** 查询日期的开始 */
    dateRangeBegin: string;
    /** 查询日期的结束 */
    dateRangeEnd: string;
}
/** JSONResult«List«污染物查询响应»» */
export interface IJSONResultListPollutantQueryResponse {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IPollutantQueryResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 污染物查询响应 */
export interface IPollutantQueryResponse {
    /** 污染物排放类别 */
    pollutantEmissionCategory: string;
    /** 数量 */
    quantity: number;
}
