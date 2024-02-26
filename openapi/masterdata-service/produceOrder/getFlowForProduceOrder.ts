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
    orderStatus?: ETheProductionOrderIsReturnedToVO1_orderStatus;
    /** 订单状态描述 */
    orderStatusDesc?: string;
    /** 操作时间 */
    createTime?: string;
    /** 描述 */
    remark?: string;
}

export enum ETheProductionOrderIsReturnedToVO1_orderStatus {
    /** 已创建 */
    CREATED = "CREATED",
    /** 已排产 */
    PLAN = "PLAN",
    /** 已下发 */
    ISSUE = "ISSUE",
    /** 生产中 */
    PRODUCE = "PRODUCE",
    /** 已取消 */
    CANCEL = "CANCEL",
    /** 已关闭 */
    CLOSE = "CLOSE",
    /** 部分完成 */
    PART_COMPLETE = "PART_COMPLETE",
    /** 已完成 */
    COMPLETE = "COMPLETE"
}
