import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/Wip快照相关/checkWipReportUsingPOST
*/
export default function fetchMethod(options: { data: IWIPStatisticsReportSearchForVO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/rtWipSnapshot/checkWipReport",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** WIP统计报表搜索VO */
export interface IWIPStatisticsReportSearchForVO {
    /** 当前页面 */
    pageNo?: number;
    /** 工序id集 */
    processIds?: string[];
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 物料id集 */
    materialIds?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
