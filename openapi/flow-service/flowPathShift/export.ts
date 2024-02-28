import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16500/doc.html#/default/任务班次相关/exportUsingPOST_1
*/
export default function fetchMethod(options: { data: ITaskShiftSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/flow-service/flowPathShift/export",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 任务班次搜索VO */
export interface ITaskShiftSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 编号 */
    code?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 名称 */
    name?: string;
    /** 状态 */
    dataStatus?: number;
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

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
