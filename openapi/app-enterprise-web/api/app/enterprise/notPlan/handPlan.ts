import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/未排产订单相关/handPlanUsingPOST
*/
export default function fetchMethod(options: { data: IManualDTOSchedulingOfProductionOrders }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/notPlan/handPlan",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 生产订单手动排产DTO */
export interface IManualDTOSchedulingOfProductionOrders {
    /** 排产计划单名称 */
    planName?: string;
    /** 排产维度 */
    dimension?: EManualDTOSchedulingOfProductionOrders_dimension;
    /** 时间维度 */
    timeDimension?: EManualDTOSchedulingOfProductionOrders_timeDimension;
    /** 排产开始日期 yyyy-MM-dd HH:mm:ss */
    beginTime?: number;
    /** 排产结束日期 yyyy-MM-dd HH:mm:ss */
    endTime?: number;
    /** 排产明细订单维度 */
    orders?: IManualProductionOrderSchedulingDetailsOrderDimensionsDTO[];
}
/** 生产订单手动排产明细订单维度DTO */
export interface IManualProductionOrderSchedulingDetailsOrderDimensionsDTO {
    /** 生产订单id */
    id?: string;
    /** 按日排产明细 */
    dayQuantities?: IManualSchedulingOfProductionOrdersDTOSchedulingDaily[];
    /** 按班次排产明细 */
    classShiftQuantities?: IManualProductionSchedulingOfProductionOrdersDTOSchedulingByShift[];
    /** 步骤产量集 */
    steps?: IProductionOrderManualSchedulingDetailStepOutputDTO[];
}
/** 生产订单手动排产按日排产DTO */
export interface IManualSchedulingOfProductionOrdersDTOSchedulingDaily {
    /** 日期 */
    scheduleDate?: number;
    /** 产量 */
    quantity?: number;
}
/** 生产订单手动排产按班次排产DTO */
export interface IManualProductionSchedulingOfProductionOrdersDTOSchedulingByShift {
    /** 日期 yyyy-MM-dd */
    scheduleDate?: number;
    /** 班次产量集 */
    classShifts?: IProductionDTOPerShift[];
}
/** 班次产量DTO */
export interface IProductionDTOPerShift {
    /** 班次id */
    classShiftId?: string;
    /** 产量 */
    quantity?: number;
}
/** 生产订单手动排产明细步骤产量DTO */
export interface IProductionOrderManualSchedulingDetailStepOutputDTO {
    /** 步骤id */
    id?: string;
    /** 按日排产明细 */
    dayQuantities?: IManualSchedulingOfProductionOrdersDTOSchedulingDaily[];
    /** 按班次排产明细 */
    classShiftQuantities?: IManualProductionSchedulingOfProductionOrdersDTOSchedulingByShift[];
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
