import { http } from "@/api/http";

/**
* @author helin
* @link http://47.108.135.148:16700/doc.html#/default/HSE大屏相关/queryEnvironmentalProtectionListUsingPOST
*/
export default function fetchMethod(options: { data: IEnvironmentalProtectionSQueryRequest }, extraOptions?: any) {
    return http<IJSONResultListGreenSQueryResponse>(
        {
            url: "/masterdata-service/hseDashboard/queryEnvironmentalProtectionList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 环保S查询请求 */
export interface IEnvironmentalProtectionSQueryRequest {
    /** 查询日期的开始 */
    dateRangeBegin?: number;
    /** 查询日期的结束 */
    dateRangeEnd?: number;
}
/** JSONResult«List«环保S查询响应»» */
export interface IJSONResultListGreenSQueryResponse {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IEnvironmentalProtectionSQueryResponse[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 环保S查询响应 */
export interface IEnvironmentalProtectionSQueryResponse {
    /** 重大隐患处理率 */
    dangerHandlerRate?: string;
    /** 环保日期 */
    environmentalProtectionDate?: string;
    /** 发生事件数量 */
    eventQuantity?: number;
    /** ID */
    id?: string;
    /** 是否有异常 */
    isException?: EEnvironmentalProtectionSQueryResponse_isException;
    /** 重大隐患处理数量 */
    majorHazardQuantity?: number;
    /** 政府通报处罚数量 */
    penaltyQuantity?: number;
}

export enum EEnvironmentalProtectionSQueryResponse_isException {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
