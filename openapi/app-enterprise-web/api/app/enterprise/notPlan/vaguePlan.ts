import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/未排产订单相关/vaguePlanUsingPOST
*/
export default function fetchMethod(options: { data: IProductionOrderFuzzySchedulingDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/notPlan/vaguePlan",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 生产订单模糊排产DTO */
export interface IProductionOrderFuzzySchedulingDTO {
    /** 排产计划单名称 */
    planName?: string;
    /** 排产订单集 */
    orders?: IProductionOrderFuzzySchedulingProductionOrderDTO[];
}
/** 生产订单模糊排产订单DTO */
export interface IProductionOrderFuzzySchedulingProductionOrderDTO {
    /** 生产订单id */
    produceOrderId?: string;
    /** 计划开始日期 yyyy-MM-dd HH:mm:ss */
    beginTime?: number;
    /** 计划结束日期 yyyy-MM-dd HH:mm:ss */
    endTime?: number;
    /** 步骤明细 */
    steps?: IProductionOrderFuzzySchedulingProductionOrderStepDTO[];
}
/** 生产订单模糊排产订单步骤DTO */
export interface IProductionOrderFuzzySchedulingProductionOrderStepDTO {
    /** 步骤id */
    id?: string;
    /** 计划开始日期 yyyy-MM-dd HH:mm:ss */
    beginTime?: number;
    /** 计划结束日期 yyyy-MM-dd HH:mm:ss */
    endTime?: number;
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
