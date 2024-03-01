import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/安全库存相关/getPageUsingPOST_27
*/
export default function fetchMethod(options: { data: ISecurityInventorySearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationSecurityInventoryReturnsVO>(
        {
            url: "/masterdata-service/safetyStock/getPage",
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
/** JSONResult«分页信息«安全库存返回VO»» */
export interface IJSONResultPagingInformationSecurityInventoryReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationSecurityInventoryReturnedToVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«安全库存返回VO» */
export interface IPagingInformationSecurityInventoryReturnedToVO {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationSecurityInventoryReturnedToVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationSecurityInventoryReturnedToVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: ISafetyStockReturnedToVO[];
    /** 下一页页码 */
    nextPage?: string;
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 上一页页码 */
    previousPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 总页数 */
    totalPage?: string;
}
/** 安全库存返回VO */
export interface ISafetyStockReturnedToVO {
    /** 物料编号 */
    code?: string;
    /** 物料id */
    id?: string;
    /** 是否开启预警 */
    isWarning?: ESafetyStockReturnedToVO_isWarning;
    /** 最大库存数 */
    maxStock?: number;
    /** 最小库存数 */
    minStock?: number;
    /** 物料名称 */
    name?: string;
    /** 安全库存数-采购触发下限 */
    safetyStock?: number;
    /** 规格 */
    spec?: string;
    /** 库存锁定数 */
    storageLockCount?: number;
    /** 库存总数 */
    storageTotalCount?: number;
    /** 库存可使用数 */
    storageUseCount?: number;
    /** 单位 */
    unit?: string;
    /** 库存预警类型 */
    warningType?: ESafetyStockReturnedToVO_warningType;
    /** 库存预警类型描述 */
    warningTypeDesc?: string;
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

export enum EPagingInformationSecurityInventoryReturnedToVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationSecurityInventoryReturnedToVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESafetyStockReturnedToVO_isWarning {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESafetyStockReturnedToVO_warningType {
    /** 正常 */
    NORMAL = "NORMAL",
    /** 已关闭预警 */
    CLOSE_WARNING = "CLOSE_WARNING",
    /** 已超上限 */
    UPPER = "UPPER",
    /** 已超下限 */
    LOWER = "LOWER"
}
