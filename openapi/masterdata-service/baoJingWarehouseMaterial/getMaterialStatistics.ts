import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/宝晶即时库存查询相关/getMaterialStatisticsUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingMaterialMasterDataInventorySearchVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultBaojingMaterialInventoryStatisticsVO>(
        {
            url: "/masterdata-service/baoJingWarehouseMaterial/getMaterialStatistics",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶物料主数据库存搜索VO */
export interface IBaojingMaterialMasterDataInventorySearchVO {
    /** 业务员id集合 */
    businessUserIdList?: string[];
    /** 客户id集合 */
    customerIdList?: string[];
    /** 编号 */
    materialCode?: string;
    /** 保管员 */
    materialCurators?: string[];
    /** 物料id集 */
    materialIds?: string[];
    /** 物料名称 */
    materialName?: string;
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 规格 */
    materialSpec?: string;
    /** 工艺 */
    materialTechnology?: string[];
    /** 材质 */
    materialTexture?: string[];
    /** 物料种类 */
    materialTypes?: string[];
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
    /** 仓位id */
    warehouseIds?: string[];
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
/** JSONResult«宝晶物料库存统计VO» */
export interface IJSONResultBaojingMaterialInventoryStatisticsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IBaojingMaterialInventoryStatisticsVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 宝晶物料库存统计VO */
export interface IBaojingMaterialInventoryStatisticsVO {
    /** 物料库存分页 */
    materialStorages?: IPagingInformationBaojingMaterialMasterDataInventoryReturnedToVO;
    /** 库存锁定数 */
    storageLockCount?: number;
    /** 库存总数 */
    storageTotalCount?: number;
    /** 库存可使用数 */
    storageUseCount?: number;
}
/** 分页信息«宝晶物料主数据库存返回VO» */
export interface IPagingInformationBaojingMaterialMasterDataInventoryReturnedToVO {
    /** 是否有下一页 */
    hasNextPage?: EPagingInformationBaojingMaterialMasterDataInventoryReturnedToVO_hasNextPage;
    /** 是否有上一页 */
    hasPreviousPage?: EPagingInformationBaojingMaterialMasterDataInventoryReturnedToVO_hasPreviousPage;
    /** 最后页页码 */
    lastPage?: string;
    /** 分页列表 */
    list?: IBaojingMaterialMasterDataInventoryReturnedToVO[];
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
/** 宝晶物料主数据库存返回VO */
export interface IBaojingMaterialMasterDataInventoryReturnedToVO {
    /** 业务员id */
    businessUserId?: string;
    /** 业务员名称 */
    businessUserName?: string;
    /** 物料编号 */
    code?: string;
    /** 客户id */
    customerId?: string;
    /** 客户名称 */
    customerName?: string;
    /** 物料id */
    id?: string;
    /** 保管员 */
    materialCurator?: string;
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 工艺 */
    materialTechnology?: string;
    /** 材质 */
    materialTexture?: string;
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
    /** 物料种类code */
    type?: string;
    /** 物料种类 */
    typeName?: string;
    /** 单位 */
    unit?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPagingInformationBaojingMaterialMasterDataInventoryReturnedToVO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingInformationBaojingMaterialMasterDataInventoryReturnedToVO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
