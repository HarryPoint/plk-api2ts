import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16500/doc.html#/default/流程重置相关/resetSystemFlowUsingPOST
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/flow-service/flowPathReset/resetSystemFlow",
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
