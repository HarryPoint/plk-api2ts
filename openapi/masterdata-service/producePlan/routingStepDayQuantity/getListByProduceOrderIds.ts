import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产计划订单步骤日产量/getListByProduceOrderIdsUsingPOST_3
*/
export default function fetchMethod(options: { data: IProductionPlanOrderStepDailyOutputVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProductionPlanOrderStepDailyOutputVO>(
        {
            url: "/masterdata-service/producePlan/routingStepDayQuantity/getListByProduceOrderIds",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产计划订单步骤日产量 VO */
export interface IProductionPlanOrderStepDailyOutputVO {
    /** 生产订单ids */
    produceOrderIds?: string[];
}
/** JSONResult«List«生产计划订单步骤日产量  VO»» */
export interface IJSONResultListProductionPlanOrderStepDailyOutputVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductionPlanOrderStepDailyOutputVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产计划订单步骤日产量  VO */
export interface IProductionPlanOrderStepDailyOutputVO {
    /** 工序id */
    processId?: string;
    /** 生产订单id */
    produceOrderId?: string;
    /** 工艺路径id */
    produceTechnologyRoutingId?: string;
    /** 工艺路径步骤id */
    produceTechnologyRoutingStepId?: string;
    /** 产量 */
    quantity?: number;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 排期日期 */
    scheduleDate?;
}
