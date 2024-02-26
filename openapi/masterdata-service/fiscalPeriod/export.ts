import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/财务期间相关/exportUsingPOST_5
*/
export default function fetchMethod(data: IFinancialPeriodQueryRequest, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/fiscalPeriod/export",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 财务期间查询请求 */
export interface IFinancialPeriodQueryRequest {
    /** 开始月份 */
    startMonth: string;
    /** 当前页面 */
    pageNo: number;
    /** 分页大小 */
    pageSize: number;
    /** 开始日期 - begin */
    startDateBegin: string;
    /** 排序字段集 */
    orders: IPagingSortVO[];
    /** 结束日期 - end */
    endDateEnd: string;
    /** 期间 */
    periodList: string[];
    /** 开始日期 - end */
    startDateEnd: string;
    /** 结束日期 - begin */
    endDateBegin: string;
    /** 天数 - Begin */
    daysBegin: number;
    /** 天数 - End */
    daysEnd: number;
    /** 结存状态列表 */
    balanceStatusList: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column: string;
    /** undefined */
    isAsc: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
