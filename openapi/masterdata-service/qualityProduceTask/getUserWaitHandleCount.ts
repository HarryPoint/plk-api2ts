import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产质检管理/getUserWaitHandleCountUsingGET_1
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; userId?: string } }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/qualityProduceTask/getUserWaitHandleCount",
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
