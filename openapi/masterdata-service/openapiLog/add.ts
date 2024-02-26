import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/开放接口相关/addUsingPOST_2
*/
export default function fetchMethod(options: { params: { clientIp?: string; enterpriseId?: number; isSuccess?: EisSuccess; reqBody?: string; reqType?: EreqType; uri?: string; userId?: number } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/openapiLog/add",
            method: "post",
            ...options,
        },
        extraOptions,
    );
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
    ts?: number;
}

export enum EisSuccess {
    Y = "Y",
    N = "N"
}

export enum EreqType {
    API = "API",
    HANDLE = "HANDLE"
}
