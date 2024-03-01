import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/质检方案/exportUsingPOST_26
*/
export default function fetchMethod(options: { data: IInspectionSolutionSearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultLong>(
        {
            url: "/masterdata-service/qualityInspectionPlan/export",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 质检方案搜索VO */
export interface IInspectionSolutionSearchVO {
    /** 编号 */
    code?: string;
    /** 状态(是否可用) */
    dataStatus?: number;
    /** 物料id */
    materialId?: string;
    /** 名称 */
    name?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 质检分类id */
    qualityInspectionCategoryId?: string;
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
