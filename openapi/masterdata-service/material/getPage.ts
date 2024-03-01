import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/物料相关/getPageUsingPOST_8
*/
export default function fetchMethod(options: { data: IMaterialMasterDataInventorySearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPagingInformationMaterialMasterDataInventoryReturnsVO>(
        {
            url: "/masterdata-service/material/getPage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 物料主数据库存搜索VO */
export interface IMaterialMasterDataInventorySearchVO {
    /** 编号 */
    materialCode?: string;
    /** 物料id集 */
    materialIds?: string[];
    /** 物料名称 */
    materialName?: string;
    /** 规格 */
    materialSpec?: string;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 仓库id */
    storehouseIds?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«物料主数据库存返回VO»» */
export interface IJSONResultPagingInformationMaterialMasterDataInventoryReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPagingInformationMaterialMasterDataInventoryReturnsVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«物料主数据库存返回VO» */
export interface IPagingInformationMaterialMasterDataInventoryReturnsVO {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationMaterialMasterDataInventoryReturnsVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationMaterialMasterDataInventoryReturnsVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IMaterialMasterDataInventoryReturnedToVO[];
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
/** 物料主数据库存返回VO */
export interface IMaterialMasterDataInventoryReturnedToVO {
    /** 物料编号 */
    code?: string;
    /** 物料id */
    id?: string;
    /** 物料名称 */
    name?: string;
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
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationMaterialMasterDataInventoryReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationMaterialMasterDataInventoryReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
