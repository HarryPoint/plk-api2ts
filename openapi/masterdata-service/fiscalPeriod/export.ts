import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/财务期间相关/exportUsingPOST_5
*/
export default function fetchMethod(options: { data: IFinancialPeriodQueryRequest }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/fiscalPeriod/export",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 财务期间查询请求 */
export interface IFinancialPeriodQueryRequest {
    /** 开始月份 */
    startMonth?: number;
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 开始日期 - begin */
    startDateBegin?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 结束日期 - end */
    endDateEnd?: number;
    /** 期间 */
    periodList?: string[];
    /** 开始日期 - end */
    startDateEnd?: number;
    /** 结束日期 - begin */
    endDateBegin?: number;
    /** 天数 - Begin */
    daysBegin?: number;
    /** 天数 - End */
    daysEnd?: number;
    /** 结存状态列表 */
    balanceStatusList?: EFinancialPeriodQueryRequest_balanceStatusList_items[];
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

export enum EFinancialPeriodQueryRequest_balanceStatusList_items {
    UNBALANCED = "UNBALANCED",
    BALANCED = "BALANCED"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
