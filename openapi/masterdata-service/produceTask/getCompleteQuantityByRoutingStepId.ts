import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产任务相关/getCompleteQuantityByRoutingStepIdUsingGET
*/
export default function fetchMethod(params: { enterpriseId?: number; produceOrderId?: number; routingStepId?: number }, extraOptions?: any) {
    return http<IJSONResultbigdecimal>(
        {
            url: "/masterdata-service/produceTask/getCompleteQuantityByRoutingStepId",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«bigdecimal» */
export interface IJSONResultbigdecimal {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
