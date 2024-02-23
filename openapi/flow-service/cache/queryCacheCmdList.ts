import { post } from '@/api/http';
 
// http://47.108.139.107:16500/doc.html#/default/缓存相关/queryCacheCmdListUsingPOST
export default function fetchMethod(data: ICacheCmdQueryRequestDTO) {
    return post<IJSONResultListCacheCmdQueryResponseDTO['data']>({
      url: "/flow-service/cache/queryCacheCmdList",
      data,
    });
}
// CacheCmdQueryRequestDTO
export interface ICacheCmdQueryRequestDTO {
    // undefined
    cacheType: string;
    // undefined
    applicationName: string;
    // undefined
    serviceInstance: string;
}
// JSONResult«List«CacheCmdQueryResponseDTO»»
export interface IJSONResultListCacheCmdQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ICacheCmdQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// CacheCmdQueryResponseDTO
export interface ICacheCmdQueryResponseDTO {
    // undefined
    id: number;
    // undefined
    cmdType: string;
    // undefined
    cacheType: string;
    // undefined
    applicationName: string;
    // undefined
    serviceInstance: string;
    // undefined
    cacheKey: string;
}
