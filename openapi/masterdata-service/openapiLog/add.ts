import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/开放接口相关/addUsingPOST_2
*/
export default function fetchMethod(options: { params: { clientIp?: string; enterpriseId?: string; isSuccess?: EisSuccess; reqBody?: string; reqType?: EreqType; uri?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/openapiLog/add",
            method: "POST",
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
    ts?: string;
}

export enum EisSuccess {
    Y = "Y",
    N = "N"
}

export enum EreqType {
    API = "API",
    HANDLE = "HANDLE"
}
