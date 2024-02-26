import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/安全库存相关/getPageUsingPOST_27
*/
export default function fetchMethod(options: { data: ISecurityInventorySearchVO }, extraOptions?: any) {
    return http<IJSONResultPagingInformationSecurityInventoryReturnsVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/safetyStock/getPage",
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
    warningType?: ESecurityInventorySearchVO_warningType;
    /** 设置类型 */
    type: ESecurityInventorySearchVO_type;
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
/** JSONResult«分页信息«安全库存返回VO»» */
export interface IJSONResultPagingInformationSecurityInventoryReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationSecurityInventoryReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«安全库存返回VO» */
export interface IPagingInformationSecurityInventoryReturnedToVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: ISafetyStockReturnedToVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationSecurityInventoryReturnedToVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationSecurityInventoryReturnedToVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 安全库存返回VO */
export interface ISafetyStockReturnedToVO {
    /** 物料id */
    id?: number;
    /** 物料名称 */
    name?: string;
    /** 物料编号 */
    code?: string;
    /** 规格 */
    spec?: string;
    /** 单位 */
    unit?: string;
    /** 库存总数 */
    storageTotalCount?: number;
    /** 库存锁定数 */
    storageLockCount?: number;
    /** 库存可使用数 */
    storageUseCount?: number;
    /** 是否开启预警 */
    isWarning?: ESafetyStockReturnedToVO_isWarning;
    /** 库存预警类型 */
    warningType?: ESafetyStockReturnedToVO_warningType;
    /** 库存预警类型描述 */
    warningTypeDesc?: string;
    /** 安全库存数-采购触发下限 */
    safetyStock?: number;
    /** 最大库存数 */
    maxStock?: number;
    /** 最小库存数 */
    minStock?: number;
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

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationSecurityInventoryReturnedToVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationSecurityInventoryReturnedToVO_hasNextPage {
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
