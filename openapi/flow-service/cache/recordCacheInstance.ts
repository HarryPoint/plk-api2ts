import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/缓存相关/recordCacheInstanceUsingPOST
export default function fetchMethod(data: ICacheInstanceRecordRequestDTO, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/flow-service/cache/recordCacheInstance",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// CacheInstanceRecordRequestDTO
export interface ICacheInstanceRecordRequestDTO {
    // undefined
    cacheType: string;
    // undefined
    applicationName: string;
    // undefined
    serviceInstance: string;
    // undefined
    detailList: ICacheInstanceDetailRequestDTO[];
}
// CacheInstanceDetailRequestDTO
export interface ICacheInstanceDetailRequestDTO {
    // undefined
    cacheKey: string;
    // undefined
    estimatedSize: number;
    // undefined
    hitCount: number;
    // undefined
    missCount: number;
    // undefined
    loadCount: number;
    // undefined
    loadSuccessCount: number;
    // undefined
    loadFailureCount: number;
    // undefined
    evictionCount: number;
    // undefined
    expireAfterWrite: number;
    // undefined
    expireAfterAccess: number;
    // undefined
    expireAfter: number;
    // undefined
    maximumSize: number;
    // undefined
    maximumWeight: number;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
