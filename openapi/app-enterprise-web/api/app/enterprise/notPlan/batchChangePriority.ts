import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/未排产订单相关/batchChangePriorityUsingPOST
*/
export default function fetchMethod(options: { data: IProductionOrderChangePriorityDTO[] }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/notPlan/batchChangePriority",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产订单变更优先级DTO */
export interface IProductionOrderChangePriorityDTO {
    /** 生产订单id */
    produceOrderId?: string;
    /** 订单优先级 */
    priorityLevel?: number;
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
