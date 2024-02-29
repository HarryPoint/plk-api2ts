import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/生产计划订单日产量/getListByProduceOrderIdsUsingPOST_1
*/
export default function fetchMethod(options: { data: IProductionPlanOrderDailyOutputVO1, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProductionPlanOrderDailyOutputVO>(
        {
            url: "/masterdata-service/producePlan/orderDayQuantity/getListByProduceOrderIds",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产计划订单日产量 VO_1 */
export interface IProductionPlanOrderDailyOutputVO1 {
    /** 生产订单ids */
    produceOrderIds?: string[];
}
/** JSONResult«List«生产计划订单日产量 VO»» */
export interface IJSONResultListProductionPlanOrderDailyOutputVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionPlanOrderDailyOutputVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产计划订单日产量 VO */
export interface IProductionPlanOrderDailyOutputVO {
    /** 生产订单id */
    produceOrderId?: string;
    /** 排期日期 */
    scheduleDate?;
    /** 产量 */
    quantity?: number;
}
