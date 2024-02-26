import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/委外加工管理/exportUsingPOST_15
*/
export default function fetchMethod(options: { data: IOutsourcingSearchVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/produceEntrust/export",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 委外加工搜索VO */
export interface IOutsourcingSearchVO {
    /** 委外单号 */
    entrustNo?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 物料id */
    materialId?: number;
    /** 发起时间开始 yyyy-MM-dd HH:mm:ss */
    beginTime?: string;
    /** 发起时间结束 yyyy-MM-dd HH:mm:ss */
    endTime?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
