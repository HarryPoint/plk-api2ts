import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/物料批次设置相关/getCanNotOpenQualityTraceabilityProduceOrderListUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; materialId?: string } }, extraOptions?: any) {
    return http<IJSONResultListQualityTraceabilityDoesNotOpenAProductionOrderResponseObject>(
        {
            url: "/masterdata-service/materialLotSetting/getCanNotOpenQualityTraceabilityProduceOrderList",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«质量追溯未打开生产订单响应对象»» */
export interface IJSONResultListQualityTraceabilityDoesNotOpenAProductionOrderResponseObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IQualityTraceabilityTheProductionOrderResponseObjectWasNotOpened[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 质量追溯未打开生产订单响应对象 */
export interface IQualityTraceabilityTheProductionOrderResponseObjectWasNotOpened {
    /** id */
    id?: string;
    /** 生产订单号 */
    code?: string;
    /** 订单状态 */
    orderStatus?: EQualityTraceabilityTheProductionOrderResponseObjectWasNotOpened_orderStatus;
}

export enum EQualityTraceabilityTheProductionOrderResponseObjectWasNotOpened_orderStatus {
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
