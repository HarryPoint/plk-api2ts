import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/班次相关/exportUsingPOST_3
*/
export default function fetchMethod(options: { data: IShiftSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultLong>(
        {
            url: "/masterdata-service/classShift/export",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 班次搜索VO */
export interface IShiftSearchVO {
    /** 编号 */
    code?: string;
    /** 状态 */
    dataStatus?: number;
    /** 名称 */
    name?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«long» */
export interface IJSONResultLong {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: string;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
