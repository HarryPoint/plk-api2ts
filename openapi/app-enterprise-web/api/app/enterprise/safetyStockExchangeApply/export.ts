import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/安全库存变更申请相关/exportUsingPOST_48
*/
export default function fetchMethod(options: { data: ISecurityStockChangeRequestSearchVO }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/safetyStockExchangeApply/export",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 安全库存变更申请搜索VO */
export interface ISecurityStockChangeRequestSearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 设置类型 */
    type: ESecurityStockChangeRequestSearchVO_type;
    /** 对应业务id */
    businessId?: number;
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
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

export enum ESecurityStockChangeRequestSearchVO_type {
    /** 全工厂 */
    ALL = "ALL",
    /** 区域 */
    AREA = "AREA",
    /** 仓库 */
    STOREHOUSE = "STOREHOUSE",
    /** 仓位 */
    WAREHOUSE = "WAREHOUSE"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
