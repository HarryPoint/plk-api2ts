import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/客户跟进日历相关/exportUsingPOST_10
*/
export default function fetchMethod(options: { data: ICustomerFollowUpCalendarInputVO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/customerFollowUpCalendar/export",
            method: "post",
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
