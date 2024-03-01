import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶即时库存查询相关/getMaterialPlaceUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingMaterialMasterDataInventoryDistributionSearchVO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListReturnTheInventoryDistributionToVO>(
        {
            url: "/masterdata-service/baoJingWarehouseMaterial/getMaterialPlace",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶物料主数据库存分布搜索VO */
export interface IBaojingMaterialMasterDataInventoryDistributionSearchVO {
    /** 编号 */
    materialCode?: string;
    /** 物料id */
    materialId?: string;
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
    /** 仓库用途 */
    storehousePurposeList?: string[];
    /** 仓位id集合 */
    warehouseIdList?: string[];
    /** 仓位用途 */
    warehousePurposeList?: string[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«List«宝晶物料库存分布返回VO»» */
export interface IJSONResultListReturnTheInventoryDistributionToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBaojingMaterialInventoryDistributionReturnedToVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 宝晶物料库存分布返回VO */
export interface IBaojingMaterialInventoryDistributionReturnedToVO {
    /** 区域编号 */
    areaCode?: string;
    /** 区域id */
    areaId?: string;
    /** 区域名称 */
    areaName?: string;
    /** 物料保管员 */
    materialCurator?: string;
    /** 物料类型code */
    materialType?: string;
    /** 物料类型 */
    materialTypeName?: string;
    /** 库存锁定数 */
    storageLockCount?: number;
    /** 库存总数 */
    storageTotalCount?: number;
    /** 库存可使用数 */
    storageUseCount?: number;
    /** 仓库编号 */
    storehouseCode?: string;
    /** 仓库id */
    storehouseId?: string;
    /** 仓库名称 */
    storehouseName?: string;
    /** 仓库用途 */
    storehousePurpose?: string;
    /** 仓位编号 */
    warehouseCode?: string;
    /** 仓位id */
    warehouseId?: string;
    /** 仓位名称 */
    warehouseName?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}
