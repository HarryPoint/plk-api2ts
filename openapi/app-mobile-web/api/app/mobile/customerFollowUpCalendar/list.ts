import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:17400/doc.html#/default/客户跟进日历相关/listUsingPOST
*/
export default function fetchMethod(options: { data: ICustomerFollowUpCalendarInputVO }, extraOptions?: any) {
    return http<IJSONResultListCustomerFollowUpCalendarOutputVO>(
        {
            url: "/app-mobile-web/api/app/mobile/customerFollowUpCalendar/list",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** CustomerFollowUpCalendarInputVO */
export interface ICustomerFollowUpCalendarInputVO {
    /** 跟进人用户ID */
    followUpUserId?: string;
    /** 客户ID */
    customerId?: string;
    /** 日历类型 */
    calendarType?: ECustomerFollowUpCalendarInputVO_calendarType;
    /** 填报月份，格式 yyyy-MM-dd HH:mm:ss */
    fillingMonth?: number;
}
/** JSONResult«List«CustomerFollowUpCalendarOutputVO»» */
export interface IJSONResultListCustomerFollowUpCalendarOutputVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ICustomerFollowUpCalendarOutputVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** CustomerFollowUpCalendarOutputVO */
export interface ICustomerFollowUpCalendarOutputVO {
    /** 业务数据ID */
    refId?: string;
    /** 日历类型 */
    calendarType?: ECustomerFollowUpCalendarOutputVO_calendarType;
    /** 发生时间 */
    dateOfOccurrence?: number;
    /** 客户信息 */
    customer?: Record<string, Record<string, any>>;
    /** 跟进人 */
    createUserId?: Record<string, Record<string, any>>;
    /** 创建人 */
    createTime?: number;
    /** 流程ID */
    flowPathId?: string;
}

export enum ECustomerFollowUpCalendarInputVO_calendarType {
    /** 跟进计划 */
    FOLLOW_PLAN = "FOLLOW_PLAN",
    /** 商机填报 */
    BUSINESS_CHANCE = "BUSINESS_CHANCE",
    /** 跟进记录 */
    FOLLOW_RECORD = "FOLLOW_RECORD",
    /** 报价 */
    QUOTE_BILL = "QUOTE_BILL",
    /** 合同签订 */
    CONTRACT = "CONTRACT"
}

export enum ECustomerFollowUpCalendarOutputVO_calendarType {
    /** 跟进计划 */
    FOLLOW_PLAN = "FOLLOW_PLAN",
    /** 商机填报 */
    BUSINESS_CHANCE = "BUSINESS_CHANCE",
    /** 跟进记录 */
    FOLLOW_RECORD = "FOLLOW_RECORD",
    /** 报价 */
    QUOTE_BILL = "QUOTE_BILL",
    /** 合同签订 */
    CONTRACT = "CONTRACT"
}
