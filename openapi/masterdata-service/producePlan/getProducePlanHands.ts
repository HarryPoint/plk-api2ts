import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产计划相关/getProducePlanHandsUsingPOST
*/
export default function fetchMethod(data: number[], params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultListProductionPlanManuallySchedulesVOProduction>(
        {
            url: "/masterdata-service/producePlan/getProducePlanHands",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产计划手动排产VO»» */
export interface IJSONResultListProductionPlanManuallySchedulesVOProduction {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IProductionScheduleManualProductionVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 生产计划手动排产VO */
export interface IProductionScheduleManualProductionVO {
    /** 生产订单id */
    id: number;
    /** 按日排产明细 */
    dayQuantities: IProductionOrderManualSchedulingVODailyScheduling[];
    /** 按班次排产明细 */
    classShiftQuantities: IManualProductionSchedulingOfProductionOrdersVOByShift[];
    /** 步骤产量集 */
    steps: IProductionOrderManualSchedulingDetailStepOutputVO[];
}
/** 生产订单手动排产按日排产VO */
export interface IProductionOrderManualSchedulingVODailyScheduling {
    /** 日期 */
    scheduleDate: string;
    /** 产量 */
    quantity: number;
}
/** 生产订单手动排产按班次排产VO */
export interface IManualProductionSchedulingOfProductionOrdersVOByShift {
    /** 日期 */
    scheduleDate: string;
    /** 班次产量集 */
    classShifts: IProductionPerShiftVO[];
}
/** 班次产量VO */
export interface IProductionPerShiftVO {
    /** 班次id */
    classShiftId: number;
    /** 产量 */
    quantity: number;
}
/** 生产订单手动排产明细步骤产量VO */
export interface IProductionOrderManualSchedulingDetailStepOutputVO {
    /** 步骤id */
    id: number;
    /** 按日排产明细 */
    dayQuantities: IProductionOrderManualSchedulingVODailyScheduling[];
    /** 按班次排产明细 */
    classShiftQuantities: IManualProductionSchedulingOfProductionOrdersVOByShift[];
}
