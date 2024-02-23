import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/模糊排产/vaguePlanUsingPOST
export default function fetchMethod(data: IProductionOrderFuzzySchedulingDTO, params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/vaguePlan/vaguePlan",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
// 生产订单模糊排产DTO
export interface IProductionOrderFuzzySchedulingDTO {
    // 排产计划单名称
    planName: string;
    // 排产订单集
    orders: IProductionOrderFuzzySchedulingProductionOrderDTO[];
}
// 生产订单模糊排产订单DTO
export interface IProductionOrderFuzzySchedulingProductionOrderDTO {
    // 生产订单id
    produceOrderId: number;
    // 计划开始日期 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 计划结束日期 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 步骤明细
    steps: IProductionOrderFuzzySchedulingProductionOrderStepDTO[];
}
// 生产订单模糊排产订单步骤DTO
export interface IProductionOrderFuzzySchedulingProductionOrderStepDTO {
    // 步骤id
    id: number;
    // 计划开始日期 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 计划结束日期 yyyy-MM-dd HH:mm:ss
    endTime: string;
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
