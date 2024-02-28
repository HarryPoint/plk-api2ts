import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/工厂日历相关/getCapacityReportFactoryCalendarListUsingPOST
*/
export default function fetchMethod(options: { data: ICapacityUtilizationReportQueryingDtos, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListCapacityUtilizationReportFactoryCalendarVO>(
        {
            url: "/masterdata-service/calendar/getCapacityReportFactoryCalendarList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 产能利用率报表查询DTO */
export interface ICapacityUtilizationReportQueryingDtos {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 工序id列表 */
    processIdList?: string[];
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 日期 -- 开始时间 */
    beginTime: string;
    /** 天数 */
    dayCount?: number;
    /** 日期 -- 结束时间 */
    endTime: string;
    /** undefined */
    produceTaskIds?: string[];
    /** undefined */
    panPanProduceOrderCompleteType?: ECapacityUtilizationReportQueryingDtos_panPanProduceOrderCompleteType;
    /** 是否按天数过滤 */
    isFilterByDayCount?: boolean;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«List«产能利用率报表工厂日历VO»» */
export interface IJSONResultListCapacityUtilizationReportFactoryCalendarVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ICapacityUtilizationReportFactoryCalendarVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 产能利用率报表工厂日历VO */
export interface ICapacityUtilizationReportFactoryCalendarVO {
    /** 日程安排日期 */
    scheduleDate?;
    /** 日程安排日期对应的工时统计（每个班次的时间*该班次相关的班组人数） */
    workTimeQuantity?: number;
    /** 日程安排日期对应的班组人员统计 */
    workUserQuantity?: number;
}

export enum ECapacityUtilizationReportQueryingDtos_panPanProduceOrderCompleteType {
    ACTUAL_MOVE_OUT_QUANTITY = "ACTUAL_MOVE_OUT_QUANTITY",
    PLAN_ORDER_MOVE_OUT_QUANTITY = "PLAN_ORDER_MOVE_OUT_QUANTITY"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
