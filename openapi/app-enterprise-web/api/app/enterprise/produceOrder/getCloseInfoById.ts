import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产订单相关/getCloseInfoByIdUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultProductionOrderClosureInformationIsReturnedToVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrder/getCloseInfoById",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«生产订单关闭信息返回VO» */
export interface IJSONResultProductionOrderClosureInformationIsReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionOrderClosureInformationIsReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 生产订单关闭信息返回VO */
export interface IProductionOrderClosureInformationIsReturnedToVO {
    /** id */
    id?: number;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 总生产数量(计划生产数量) */
    totalCount?: number;
    /** 当前生产数量(合格产出数量) */
    currentCount?: number;
    /** 当前累积报废数量 */
    currentScrapCount?: number;
    /** 任务处理数量 */
    taskCompleteQuantity?: number;
    /** 是否存在未处理的审批事件 */
    hasWaitProduceHandle?: EProductionOrderClosureInformationIsReturnedToVO_hasWaitProduceHandle;
    /** 是否存在未处理完的委外订单 */
    hasSurplusProduceEntrust?: EProductionOrderClosureInformationIsReturnedToVO_hasSurplusProduceEntrust;
    /** 关闭后的订单状态 */
    orderStatus?: EProductionOrderClosureInformationIsReturnedToVO_orderStatus;
    /** 关闭后的订单状态描述 */
    orderStatusDesc?: string;
}

export enum EProductionOrderClosureInformationIsReturnedToVO_hasWaitProduceHandle {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionOrderClosureInformationIsReturnedToVO_hasSurplusProduceEntrust {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionOrderClosureInformationIsReturnedToVO_orderStatus {
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
