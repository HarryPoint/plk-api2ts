import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产任务相关/getUserWaitHandleCountUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; isTimeout?: EisTimeout; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/produceTask/getUserWaitHandleCount",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EisTimeout {
    Y = "Y",
    N = "N"
}
