import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产计划订单步骤日产量/getListByProduceOrderIdsUsingPOST_3
*/
export default function fetchMethod(data: IProductionPlanOrderStepDailyOutputVO, params: { enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultListProductionPlanOrderStepDailyOutputVO>(
        {
            url: "/masterdata-service/producePlan/routingStepDayQuantity/getListByProduceOrderIds",
            method: "post",
            data,
            params,
        },
        extraOptions,
    );
}
/** 生产计划订单步骤日产量 VO */
export interface IProductionPlanOrderStepDailyOutputVO {
    /** 生产订单ids */
    produceOrderIds: number[];
}
/** JSONResult«List«生产计划订单步骤日产量  VO»» */
export interface IJSONResultListProductionPlanOrderStepDailyOutputVO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IProductionPlanOrderStepDailyOutputVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 生产计划订单步骤日产量  VO */
export interface IProductionPlanOrderStepDailyOutputVO {
    /** 生产订单id */
    produceOrderId: number;
    /** 工艺路径id */
    produceTechnologyRoutingId: number;
    /** 工艺路径步骤 */
    routingStep: number;
    /** 工艺路径步骤id */
    produceTechnologyRoutingStepId: number;
    /** 工序id */
    processId: number;
    /** 排期日期 */
    scheduleDate: string;
    /** 产量 */
    quantity: number;
}
