import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/库存查询相关/getMaterialStatisticsUsingPOST_1
*/
export default function fetchMethod(options: { data: IMaterialMasterDataInventorySearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultMaterialInventoryStatisticsVO>(
        {
            url: "/masterdata-service/warehouseMaterial/getMaterialStatistics",
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
    materialIds?: string[];
    /** 编号 */
    materialCode?: string;
    /** 规格 */
    materialSpec?: string;
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
/** JSONResult«物料库存统计VO» */
export interface IJSONResultMaterialInventoryStatisticsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IMaterialInventoryStatisticsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料库存统计VO */
export interface IMaterialInventoryStatisticsVO {
    /** 库存总数 */
    storageTotalCount?: number;
    /** 库存锁定数 */
    storageLockCount?: number;
    /** 库存可使用数 */
    storageUseCount?: number;
    /** 物料库存分页 */
    materialStorages?: IPagingInformationMaterialMasterDataInventoryReturnsVO;
}
/** 分页信息«物料主数据库存返回VO» */
export interface IPagingInformationMaterialMasterDataInventoryReturnsVO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IMaterialMasterDataInventoryReturnedToVO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationMaterialMasterDataInventoryReturnsVO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationMaterialMasterDataInventoryReturnsVO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** 物料主数据库存返回VO */
export interface IMaterialMasterDataInventoryReturnedToVO {
    /** 物料id */
    id?: string;
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

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationMaterialMasterDataInventoryReturnsVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationMaterialMasterDataInventoryReturnsVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
