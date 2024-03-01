import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/模糊排产/vaguePlanUsingPOST
*/
export default function fetchMethod(options: { data: IProductionOrderFuzzySchedulingDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/vaguePlan/vaguePlan",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产订单模糊排产DTO */
export interface IProductionOrderFuzzySchedulingDTO {
    /** 排产订单集 */
    orders?: IProductionOrderFuzzySchedulingProductionOrderDTO[];
    /** 排产计划单名称 */
    planName?: string;
}
/** 生产订单模糊排产订单DTO */
export interface IProductionOrderFuzzySchedulingProductionOrderDTO {
    /** 计划开始日期 yyyy-MM-dd HH:mm:ss */
    beginTime?: number;
    /** 计划结束日期 yyyy-MM-dd HH:mm:ss */
    endTime?: number;
    /** 生产订单id */
    produceOrderId?: string;
    /** 步骤明细 */
    steps?: IProductionOrderFuzzySchedulingProductionOrderStepDTO[];
}
/** 生产订单模糊排产订单步骤DTO */
export interface IProductionOrderFuzzySchedulingProductionOrderStepDTO {
    /** 计划开始日期 yyyy-MM-dd HH:mm:ss */
    beginTime?: number;
    /** 计划结束日期 yyyy-MM-dd HH:mm:ss */
    endTime?: number;
    /** 步骤id */
    id?: string;
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
