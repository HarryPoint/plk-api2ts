import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/HSE大屏相关/queryHealthsUsingPOST
*/
export default function fetchMethod(options: { data: IHealthHQueryRequest }, extraOptions?: any) {
    return http<IJSONResultListHealthHQueryResponse>(
        {
            url: "/masterdata-service/hseDashboard/queryHealths",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 健康H查询请求 */
export interface IHealthHQueryRequest {
    /** 查询日期的开始 */
    dateRangeBegin?: string;
    /** 查询日期的结束 */
    dateRangeEnd?: string;
}
/** JSONResult«List«健康H查询响应»» */
export interface IJSONResultListHealthHQueryResponse {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IHealthHQueryResponse[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 健康H查询响应 */
export interface IHealthHQueryResponse {
    /** ID */
    id?: number;
    /** 健康日期 */
    healthDate?: string;
    /** 轻伤及以上事故数 */
    accidentsQuantity?: number;
    /** 新增职业病人数 */
    careerDiseaseQuantity?: number;
    /** 是否有异常 */
    isException?: string;
}
