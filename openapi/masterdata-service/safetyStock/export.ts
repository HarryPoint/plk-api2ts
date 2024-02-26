import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/安全库存相关/exportUsingPOST_29
*/
export default function fetchMethod(options: { data: ISecurityInventorySearchVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/safetyStock/export",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 安全库存搜索VO */
export interface ISecurityInventorySearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 物料编号 */
    code?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 物料名称 */
    name?: string;
    /** 库存预警类型 */
    warningType?: string;
    /** 设置类型 */
    type: string;
    /** 对应业务id */
    businessId?: number;
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
