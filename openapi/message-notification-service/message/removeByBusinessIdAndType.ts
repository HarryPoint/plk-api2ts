import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:17600/doc.html#/default/消息相关/removeByBusinessIdAndTypeUsingGET
*/
export default function fetchMethod(options: { params: { businessId?: string; businessType?: EbusinessType; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/message-notification-service/message/removeByBusinessIdAndType",
            method: "GET",
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

export enum EbusinessType {
    PRODUCE_TASK = "PRODUCE_TASK"
}
