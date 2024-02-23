import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/自动排产订单相关/autoInsertOrderComputeDetermineUsingPOST
export default function fetchMethod(data: IProductionOrderAutomaticInsertionCalculationResultsToDetermineTheDTO, params: { enterpriseId: number }) {
    return http<IJSONResultobject>({
        url: "/masterdata-service/autoPlan/autoInsertOrderComputeDetermine",
        method: "post",
        data,
        params,
    });
}
// 生产订单自动插单计算结果确定DTO
export interface IProductionOrderAutomaticInsertionCalculationResultsToDetermineTheDTO {
    // 排产计划单名称
    planName: string;
    // 排产方式
    autoPlanType: string;
    // 是否考虑自动提前（要传计算时的值）
    isAutoMoveUp: string;
    // 生产订单计划时间集
    produceOrderPlanTimes: IAutomaticProductionOrderSchedulingTimeDTO[];
    // 顺延订单计划时间集
    produceOrderPostponeTimes: IAutomaticProductionOrderSchedulingTimeDTO[];
}
// 生产订单自动排产计划时间DTO
export interface IAutomaticProductionOrderSchedulingTimeDTO {
    // 订单id
    id: number;
    // 订单号
    code: string;
    // 计划开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 计划结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 步骤计划集
    steps: IProductionOrderAutomaticSchedulingStepTimeDTO[];
}
// 生产订单自动排产计划步骤时间DTO
export interface IProductionOrderAutomaticSchedulingStepTimeDTO {
    // 步骤id
    id: number;
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 工序计划开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 工序计划结束时间 yyyy-MM-dd HH:mm:ss
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
