import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产计划相关/getProducePlanHandsUsingPOST
*/
export default function fetchMethod(options: { data: string[], params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProductionPlanManuallySchedulesVOProduction>(
        {
            url: "/masterdata-service/producePlan/getProducePlanHands",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产计划手动排产VO»» */
export interface IJSONResultListProductionPlanManuallySchedulesVOProduction {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductionScheduleManualProductionVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产计划手动排产VO */
export interface IProductionScheduleManualProductionVO {
    /** 按班次排产明细 */
    classShiftQuantities?: IManualProductionSchedulingOfProductionOrdersVOByShift[];
    /** 按日排产明细 */
    dayQuantities?: IProductionOrderManualSchedulingVODailyScheduling[];
    /** 生产订单id */
    id?: string;
    /** 步骤产量集 */
    steps?: IProductionOrderManualSchedulingDetailStepOutputVO[];
}
/** 生产订单手动排产按班次排产VO */
export interface IManualProductionSchedulingOfProductionOrdersVOByShift {
    /** 班次产量集 */
    classShifts?: IProductionPerShiftVO[];
    /** 日期 */
    scheduleDate?;
}
/** 班次产量VO */
export interface IProductionPerShiftVO {
    /** 班次id */
    classShiftId?: string;
    /** 产量 */
    quantity?: number;
}
/** 生产订单手动排产按日排产VO */
export interface IProductionOrderManualSchedulingVODailyScheduling {
    /** 产量 */
    quantity?: number;
    /** 日期 */
    scheduleDate?;
}
/** 生产订单手动排产明细步骤产量VO */
export interface IProductionOrderManualSchedulingDetailStepOutputVO {
    /** 按班次排产明细 */
    classShiftQuantities?: IManualProductionSchedulingOfProductionOrdersVOByShift[];
    /** 按日排产明细 */
    dayQuantities?: IProductionOrderManualSchedulingVODailyScheduling[];
    /** 步骤id */
    id?: string;
}
