import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/HSE大屏相关/queryRiskPointPollutionSourceListUsingPOST
export default function fetchMethod(data: IRiskPointPollutionSourceQueryRequest, extraOptions?: any) {
    return http<IJSONResultListIndicatesTheResponseToTheSourceQueryAtTheRiskPoint>(
        {
            url: "/masterdata-service/hseDashboard/queryRiskPointPollutionSourceList",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 风险点污染源查询请求
export interface IRiskPointPollutionSourceQueryRequest {
    // 查询日期的开始
    dateRangeBegin: string;
    // 查询日期的结束
    dateRangeEnd: string;
}
// JSONResult«List«风险点污染源查询响应»»
export interface IJSONResultListIndicatesTheResponseToTheSourceQueryAtTheRiskPoint {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IRiskPointPollutionSourceQueryResponse[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 风险点污染源查询响应
export interface IRiskPointPollutionSourceQueryResponse {
    // ID
    id: number;
    // 年份
    year: string;
    // 风险点数量
    riskPointQuantity: number;
    // 污染源数量
    pollutionSourceQuantity: number;
}
