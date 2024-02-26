import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产订单相关/getFlowForProduceOrderUsingGET
*/
export default function fetchMethod(options: { params: { produceOrderId?: string; enterpriseId?: number } }, extraOptions?: any) {
    return http<IJSONResultListReturnTheProductionOrderToVO1>(
        {
            url: "/masterdata-service/produceOrder/getFlowForProduceOrder",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«生产订单返回VO»»_1 */
export interface IJSONResultListReturnTheProductionOrderToVO1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProductionOrderIsReturnedToVO1[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 生产订单返回VO_1 */
export interface ITheProductionOrderIsReturnedToVO1 {
    /** id */
    id?: number;
    /** 订单状态 */
    orderStatus?: string;
    /** 订单状态描述 */
    orderStatusDesc?: string;
    /** 操作时间 */
    createTime?: string;
    /** 描述 */
    remark?: string;
}
