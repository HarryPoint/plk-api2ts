import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/HSE大屏相关/querySecurityListUsingPOST
*/
export default function fetchMethod(options: { data: ISecurityQueryRequest }, extraOptions?: any) {
    return http<IJSONResultListSecurityQueryResponse>(
        {
            url: "/masterdata-service/hseDashboard/querySecurityList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 安全查询请求 */
export interface ISecurityQueryRequest {
    /** 查询日期的开始 */
    dateRangeBegin?: number;
    /** 查询日期的结束 */
    dateRangeEnd?: number;
}
/** JSONResult«List«安全查询响应»» */
export interface IJSONResultListSecurityQueryResponse {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ISecurityQueryResponse[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 安全查询响应 */
export interface ISecurityQueryResponse {
    /** 轻伤及以上事故数 */
    accidentsQuantity?: number;
    /** 新增职业病人数 */
    careerDiseaseQuantity?: number;
    /** 重大隐患处理率 */
    dangerHandlerRate?: string;
    /** ID */
    id?: string;
    /** 是否有异常 */
    isException?: ESecurityQueryResponse_isException;
    /** 重大隐患处理数量 */
    majorHazardQuantity?: number;
    /** 安全日期 */
    securityDate?: string;
}

export enum ESecurityQueryResponse_isException {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
