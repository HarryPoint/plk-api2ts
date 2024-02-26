import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/物料相关/getPageUsingPOST_8
*/
export default function fetchMethod(options: { data: IMaterialMasterDataInventorySearchVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultPagingInformationMaterialMasterDataInventoryReturnsVO>(
        {
            url: "/masterdata-service/material/getPage",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 物料主数据库存搜索VO */
export interface IMaterialMasterDataInventorySearchVO {
    /** 当前页面 */
    pageNo?: number;
    /** 物料名称 */
    materialName?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 物料id集 */
    materialIds?: number[];
    /** 编号 */
    materialCode?: string;
    /** 规格 */
    materialSpec?: string;
    /** 仓库id */
    storehouseIds?: number[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: ('Y' | 'N');
}
/** JSONResult«分页信息«物料主数据库存返回VO»» */
export interface IJSONResultPagingInformationMaterialMasterDataInventoryReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationMaterialMasterDataInventoryReturnsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«物料主数据库存返回VO» */
export interface IPagingInformationMaterialMasterDataInventoryReturnsVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IMaterialMasterDataInventoryReturnedToVO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** 物料主数据库存返回VO */
export interface IMaterialMasterDataInventoryReturnedToVO {
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
}
