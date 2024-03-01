import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/自动排产订单相关/autoPlanComputeDetermineUsingPOST
*/
export default function fetchMethod(options: { data: IProductionOrderAutomaticSchedulingCalculationResultsToDetermineTheDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/autoPlan/autoPlanComputeDetermine",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产订单自动排产计算结果确定DTO */
export interface IProductionOrderAutomaticSchedulingCalculationResultsToDetermineTheDTO {
    /** 排产方式 */
    autoPlanType?: EProductionOrderAutomaticSchedulingCalculationResultsToDetermineTheDTO_autoPlanType;
    /** 排产开始时间 yyyy-MM-dd HH:mm:ss（要传计算时的值） */
    beginTime?: number;
    /** 排产结束时间 yyyy-MM-dd HH:mm:ss（要传计算时的值） */
    endTime?: number;
    /** 是否考虑自动提前（要传计算时的值） */
    isAutoMoveUp?: EProductionOrderAutomaticSchedulingCalculationResultsToDetermineTheDTO_isAutoMoveUp;
    /** 排产计划单名称 */
    planName?: string;
    /** 生产订单计划时间集 */
    produceOrderPlanTimes?: IAutomaticProductionOrderSchedulingTimeDTO[];
}
/** 生产订单自动排产计划时间DTO */
export interface IAutomaticProductionOrderSchedulingTimeDTO {
    /** 计划开始时间 yyyy-MM-dd HH:mm:ss */
    beginTime: number;
    /** 订单号 */
    code: string;
    /** 计划结束时间 yyyy-MM-dd HH:mm:ss */
    endTime: number;
    /** 订单id */
    id: string;
    /** 步骤计划集 */
    steps?: IProductionOrderAutomaticSchedulingStepTimeDTO[];
}
/** 生产订单自动排产计划步骤时间DTO */
export interface IProductionOrderAutomaticSchedulingStepTimeDTO {
    /** 工序计划开始时间 yyyy-MM-dd HH:mm:ss */
    beginTime: number;
    /** 工序计划结束时间 yyyy-MM-dd HH:mm:ss */
    endTime: number;
    /** 步骤id */
    id: string;
    /** 工序编号 */
    processCode: string;
    /** 工序id */
    processId: string;
    /** 工序名称 */
    processName: string;
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

export enum EProductionOrderAutomaticSchedulingCalculationResultsToDetermineTheDTO_autoPlanType {
    /** 正向排产 */
    ASC = "ASC",
    /** 倒序排产 */
    DESC = "DESC"
}

export enum EProductionOrderAutomaticSchedulingCalculationResultsToDetermineTheDTO_isAutoMoveUp {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
