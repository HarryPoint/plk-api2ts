import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/手动排产/handPlanUsingPOST
export function fetchMethod(data: IManualDTOSchedulingOfProductionOrders, params: { enterpriseId: number }) {
    return post({
      url: "/masterdata-service/handPlan/handPlan",
      data,
      params,
    });
}
// 生产订单手动排产DTO
export interface IManualDTOSchedulingOfProductionOrders {
    // 排产计划单名称
    planName: string;
    // 排产维度
    dimension: string;
    // 时间维度
    timeDimension: string;
    // 排产开始日期 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 排产结束日期 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 排产明细订单维度
    orders: IManualProductionOrderSchedulingDetailsOrderDimensionsDTO[];
}
// 生产订单手动排产明细订单维度DTO
export interface IManualProductionOrderSchedulingDetailsOrderDimensionsDTO {
    // 生产订单id
    id: number;
    // 按日排产明细
    dayQuantities: IManualSchedulingOfProductionOrdersDTOSchedulingDaily[];
    // 按班次排产明细
    classShiftQuantities: IManualProductionSchedulingOfProductionOrdersDTOSchedulingByShift[];
    // 步骤产量集
    steps: IProductionOrderManualSchedulingDetailStepOutputDTO[];
}
// 生产订单手动排产按日排产DTO
export interface IManualSchedulingOfProductionOrdersDTOSchedulingDaily {
    // 日期
    scheduleDate: string;
    // 产量
    quantity: number;
}
// 生产订单手动排产按班次排产DTO
export interface IManualProductionSchedulingOfProductionOrdersDTOSchedulingByShift {
    // 日期 yyyy-MM-dd
    scheduleDate: string;
    // 班次产量集
    classShifts: IProductionDTOPerShift[];
}
// 班次产量DTO
export interface IProductionDTOPerShift {
    // 班次id
    classShiftId: number;
    // 产量
    quantity: number;
}
// 生产订单手动排产明细步骤产量DTO
export interface IProductionOrderManualSchedulingDetailStepOutputDTO {
    // 步骤id
    id: number;
    // 按日排产明细
    dayQuantities: IManualSchedulingOfProductionOrdersDTOSchedulingDaily[];
    // 按班次排产明细
    classShiftQuantities: IManualProductionSchedulingOfProductionOrdersDTOSchedulingByShift[];
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
