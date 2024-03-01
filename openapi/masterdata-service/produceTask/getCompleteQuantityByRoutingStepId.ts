import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产任务相关/getCompleteQuantityByRoutingStepIdUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; produceOrderId?: string; routingStepId?: string } }, extraOptions?: any) {
    return http<IJSONResultBigdecimal>(
        {
            url: "/masterdata-service/produceTask/getCompleteQuantityByRoutingStepId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«bigdecimal» */
export interface IJSONResultBigdecimal {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
