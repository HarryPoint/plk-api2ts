import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16500/doc.html#/default/缓存相关/recordCacheInstanceUsingPOST
*/
export default function fetchMethod(options: { data: ICacheInstanceRecordRequestDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/flow-service/cache/recordCacheInstance",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** CacheInstanceRecordRequestDTO */
export interface ICacheInstanceRecordRequestDTO {
    /** undefined */
    cacheType?: string;
    /** undefined */
    applicationName?: string;
    /** undefined */
    serviceInstance?: string;
    /** undefined */
    detailList?: ICacheInstanceDetailRequestDTO[];
}
/** CacheInstanceDetailRequestDTO */
export interface ICacheInstanceDetailRequestDTO {
    /** undefined */
    cacheKey?: string;
    /** undefined */
    estimatedSize?: string;
    /** undefined */
    hitCount?: string;
    /** undefined */
    missCount?: string;
    /** undefined */
    loadCount?: string;
    /** undefined */
    loadSuccessCount?: string;
    /** undefined */
    loadFailureCount?: string;
    /** undefined */
    evictionCount?: string;
    /** undefined */
    expireAfterWrite?: string;
    /** undefined */
    expireAfterAccess?: string;
    /** undefined */
    expireAfter?: string;
    /** undefined */
    maximumSize?: string;
    /** undefined */
    maximumWeight?: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
