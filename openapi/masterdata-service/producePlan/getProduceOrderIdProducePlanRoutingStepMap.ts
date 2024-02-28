import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产计划相关/getProduceOrderIdProducePlanRoutingStepMapUsingPOST
*/
export default function fetchMethod(options: { data: string[], params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultMaplongListProductionPlanProcessPathStepScheduleProductionVO>(
        {
            url: "/masterdata-service/producePlan/getProduceOrderIdProducePlanRoutingStepMap",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«Map«long,List«生产计划工艺路径步骤排产  VO»»» */
export interface IJSONResultMaplongListProductionPlanProcessPathStepScheduleProductionVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, IProductionPlanningProcessPathStepSchedulingProductionVO[]>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产计划工艺路径步骤排产  VO */
export interface IProductionPlanningProcessPathStepSchedulingProductionVO {
    /** 生产订单id */
    produceOrderId?: string;
    /** 工艺路径id */
    produceTechnologyRoutingId?: string;
    /** 工艺路径步骤 */
    produceTechnologyRoutingStep?: number;
    /** 工艺路径步骤id */
    produceTechnologyRoutingStepId?: string;
    /** 工序id */
    processId?: string;
    /** 计划开始日期 */
    beginTime?: number;
    /** 计划结束日期 */
    endTime?: number;
    /** 工序编号 */
    processCode?: string;
    /** 工序名称 */
    processName?: string;
    /** 生产数量 -- 产能 */
    capacityProduceQuantity?: number;
    /** 生产时间 -- 产能 */
    capacityProduceTime?: number;
    /** 时间单位 -- 产能 */
    capacityTimeType?: EProductionPlanningProcessPathStepSchedulingProductionVO_capacityTimeType;
    /** 时间单位 -- 准备耗时 */
    readyTimeUnit?: EProductionPlanningProcessPathStepSchedulingProductionVO_readyTimeUnit;
    /** 准备耗时 -- 准备耗时 */
    readyTime?: number;
}

export enum EProductionPlanningProcessPathStepSchedulingProductionVO_capacityTimeType {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}

export enum EProductionPlanningProcessPathStepSchedulingProductionVO_readyTimeUnit {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}
