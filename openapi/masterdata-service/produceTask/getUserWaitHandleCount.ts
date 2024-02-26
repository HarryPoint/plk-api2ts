import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产任务相关/getUserWaitHandleCountUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: number; isTimeout?: EisTimeout; userId?: number } }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/produceTask/getUserWaitHandleCount",
            method: "get",
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
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

export enum EisTimeout {
    Y = "Y",
    N = "N"
}
