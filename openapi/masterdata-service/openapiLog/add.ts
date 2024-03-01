import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/开放接口相关/addUsingPOST_2
*/
export default function fetchMethod(options: { params: { ClientIp?: string; EnterpriseId?: string; IsSuccess?: EIsSuccess; ReqBody?: string; ReqType?: EReqType; Uri?: string; UserId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/openapiLog/add",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EIsSuccess {
    Y = "Y",
    N = "N"
}

export enum EReqType {
    API = "API",
    HANDLE = "HANDLE"
}
