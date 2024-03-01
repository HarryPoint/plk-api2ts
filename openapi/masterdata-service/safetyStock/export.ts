import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/安全库存相关/exportUsingPOST_29
*/
export default function fetchMethod(options: { data: ISecurityInventorySearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultLong>(
        {
            url: "/masterdata-service/safetyStock/export",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 安全库存搜索VO */
export interface ISecurityInventorySearchVO {
    /** 对应业务id */
    businessId?: string;
    /** 物料编号 */
    code?: string;
    /** 物料名称 */
    name?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 设置类型 */
    type: ESecurityInventorySearchVO_type;
    /** 库存预警类型 */
    warningType?: ESecurityInventorySearchVO_warningType;
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

export enum ESecurityInventorySearchVO_type {
    /** 全工厂 */
    ALL = "ALL",
    /** 区域 */
    AREA = "AREA",
    /** 仓库 */
    STOREHOUSE = "STOREHOUSE",
    /** 仓位 */
    WAREHOUSE = "WAREHOUSE"
}

export enum ESecurityInventorySearchVO_warningType {
    /** 正常 */
    NORMAL = "NORMAL",
    /** 已关闭预警 */
    CLOSE_WARNING = "CLOSE_WARNING",
    /** 已超上限 */
    UPPER = "UPPER",
    /** 已超下限 */
    LOWER = "LOWER"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
