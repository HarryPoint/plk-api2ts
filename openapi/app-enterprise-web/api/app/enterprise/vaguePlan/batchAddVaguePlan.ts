import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/模糊排产相关/batchAddVaguePlanUsingPOST
*/
export default function fetchMethod(options: { data: IProductionOrderBatchFuzzySchedulingDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/vaguePlan/batchAddVaguePlan",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产订单批量模糊排产DTO */
export interface IProductionOrderBatchFuzzySchedulingDTO {
    /** 生产订单id集合 */
    ids: string[];
    /** 计划开始时间, yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00 */
    beginTime: string;
    /** 计划结束时间, yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00 */
    endTime: string;
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
