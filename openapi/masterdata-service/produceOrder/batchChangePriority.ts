import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产订单相关/batchChangePriorityUsingPOST
*/
export default function fetchMethod(options: { data: IProductionOrderChangePriorityDTO[], params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/produceOrder/batchChangePriority",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产订单变更优先级DTO */
export interface IProductionOrderChangePriorityDTO {
    /** 订单优先级 */
    priorityLevel?: number;
    /** 生产订单id */
    produceOrderId?: string;
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
