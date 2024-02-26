import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/未排产订单相关/autoPlanComputeDetermineUsingPOST
*/
export default function fetchMethod(options: { data: IProductionOrderAutomaticSchedulingCalculationResultsToDetermineTheDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/notPlan/autoPlanComputeDetermine",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 生产订单自动排产计算结果确定DTO */
export interface IProductionOrderAutomaticSchedulingCalculationResultsToDetermineTheDTO {
    /** 排产计划单名称 */
    planName?: string;
    /** 排产方式 */
    autoPlanType?: ('ASC' | 'DESC');
    /** 是否考虑自动提前（要传计算时的值） */
    isAutoMoveUp?: ('Y' | 'N');
    /** 排产开始时间 yyyy-MM-dd HH:mm:ss（要传计算时的值） */
    beginTime?: string;
    /** 排产结束时间 yyyy-MM-dd HH:mm:ss（要传计算时的值） */
    endTime?: string;
    /** 生产订单计划时间集 */
    produceOrderPlanTimes?: IAutomaticProductionOrderSchedulingTimeDTO[];
}
/** 生产订单自动排产计划时间DTO */
export interface IAutomaticProductionOrderSchedulingTimeDTO {
    /** 订单id */
    id: number;
    /** 订单号 */
    code: string;
    /** 计划开始时间 yyyy-MM-dd HH:mm:ss */
    beginTime: string;
    /** 计划结束时间 yyyy-MM-dd HH:mm:ss */
    endTime: string;
    /** 步骤计划集 */
    steps?: IProductionOrderAutomaticSchedulingStepTimeDTO[];
}
/** 生产订单自动排产计划步骤时间DTO */
export interface IProductionOrderAutomaticSchedulingStepTimeDTO {
    /** 步骤id */
    id: number;
    /** 工序id */
    processId: number;
    /** 工序名称 */
    processName: string;
    /** 工序编号 */
    processCode: string;
    /** 工序计划开始时间 yyyy-MM-dd HH:mm:ss */
    beginTime: string;
    /** 工序计划结束时间 yyyy-MM-dd HH:mm:ss */
    endTime: string;
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
    ts?: number;
}
