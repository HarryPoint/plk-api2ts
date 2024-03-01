import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/手动排产/handPlanUsingPOST
*/
export default function fetchMethod(options: { data: IManualDTOSchedulingOfProductionOrders, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/handPlan/handPlan",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产订单手动排产DTO */
export interface IManualDTOSchedulingOfProductionOrders {
    /** 排产开始日期 yyyy-MM-dd HH:mm:ss */
    beginTime?: number;
    /** 排产维度 */
    dimension?: EManualDTOSchedulingOfProductionOrders_dimension;
    /** 排产结束日期 yyyy-MM-dd HH:mm:ss */
    endTime?: number;
    /** 排产明细订单维度 */
    orders?: IManualProductionOrderSchedulingDetailsOrderDimensionsDTO[];
    /** 排产计划单名称 */
    planName?: string;
    /** 时间维度 */
    timeDimension?: EManualDTOSchedulingOfProductionOrders_timeDimension;
}
/** 生产订单手动排产明细订单维度DTO */
export interface IManualProductionOrderSchedulingDetailsOrderDimensionsDTO {
    /** 按班次排产明细 */
    classShiftQuantities?: IManualProductionSchedulingOfProductionOrdersDTOSchedulingByShift[];
    /** 按日排产明细 */
    dayQuantities?: IManualSchedulingOfProductionOrdersDTOSchedulingDaily[];
    /** 生产订单id */
    id?: string;
    /** 步骤产量集 */
    steps?: IProductionOrderManualSchedulingDetailStepOutputDTO[];
}
/** 生产订单手动排产按班次排产DTO */
export interface IManualProductionSchedulingOfProductionOrdersDTOSchedulingByShift {
    /** 班次产量集 */
    classShifts?: IProductionDTOPerShift[];
    /** 日期 yyyy-MM-dd */
    scheduleDate?: number;
}
/** 班次产量DTO */
export interface IProductionDTOPerShift {
    /** 班次id */
    classShiftId?: string;
    /** 产量 */
    quantity?: number;
}
/** 生产订单手动排产按日排产DTO */
export interface IManualSchedulingOfProductionOrdersDTOSchedulingDaily {
    /** 产量 */
    quantity?: number;
    /** 日期 */
    scheduleDate?: number;
}
/** 生产订单手动排产明细步骤产量DTO */
export interface IProductionOrderManualSchedulingDetailStepOutputDTO {
    /** 按班次排产明细 */
    classShiftQuantities?: IManualProductionSchedulingOfProductionOrdersDTOSchedulingByShift[];
    /** 按日排产明细 */
    dayQuantities?: IManualSchedulingOfProductionOrdersDTOSchedulingDaily[];
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

export enum EManualDTOSchedulingOfProductionOrders_dimension {
    /** 订单 */
    ORDER = "ORDER",
    /** 工序 */
    PROCESS = "PROCESS"
}

export enum EManualDTOSchedulingOfProductionOrders_timeDimension {
    /** 日 */
    DAY = "DAY",
    /** 班次 */
    CLASS_SHIFT = "CLASS_SHIFT"
}
