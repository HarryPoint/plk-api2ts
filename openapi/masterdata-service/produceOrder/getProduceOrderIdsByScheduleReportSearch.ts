import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产订单相关/getProduceOrderIdsByScheduleReportSearchUsingPOST
*/
export default function fetchMethod(options: { data: IProductionSchedulingOrderSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListLong>(
        {
            url: "/masterdata-service/produceOrder/getProduceOrderIdsByScheduleReportSearch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产排产订单搜索VO */
export interface IProductionSchedulingOrderSearchVO {
    /** 计划开始日期查询结束时间 */
    endTimeOfBeginTime?: number;
    /** 计划结束日期查询结束时间 */
    endTimeOfEndTime?: number;
    /** 物料id集合 */
    materialIds?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 父级订单编号 */
    parentProduceOrderCode?: string;
    /** 排产方式集合 */
    planTypeList?: EProductionSchedulingOrderSearchVO_planTypeList_items[];
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 销售订单编号 */
    salesOrderCode?: string;
    /** 计划开始日期查询开始时间 */
    startTimeOfBeginTime?: number;
    /** 计划结束日期查询开始时间 */
    startTimeOfEndTime?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«List«long»» */
export interface IJSONResultListLong {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EProductionSchedulingOrderSearchVO_planTypeList_items {
    NOT_PLAN = "NOT_PLAN",
    AUTO = "AUTO",
    HAND = "HAND",
    VAGUE = "VAGUE"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
