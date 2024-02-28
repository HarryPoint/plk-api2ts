import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/订单排产报表/exportExcelBySaleOrderUsingPOST
*/
export default function fetchMethod(options: { data: IProductionSchedulingOrderSearchVO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceOrderScheduleReport/exportExcelBySaleOrder",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产排产订单搜索VO */
export interface IProductionSchedulingOrderSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 生产订单编号 */
    produceOrderCode?: string;
    /** 父级订单编号 */
    parentProduceOrderCode?: string;
    /** 销售订单编号 */
    salesOrderCode?: string;
    /** 物料id集合 */
    materialIds?: string[];
    /** 计划开始日期查询开始时间 */
    startTimeOfBeginTime?: number;
    /** 计划开始日期查询结束时间 */
    endTimeOfBeginTime?: number;
    /** 排产方式集合 */
    planTypeList?: EProductionSchedulingOrderSearchVO_planTypeList_items[];
    /** 计划结束日期查询结束时间 */
    endTimeOfEndTime?: number;
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
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
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
