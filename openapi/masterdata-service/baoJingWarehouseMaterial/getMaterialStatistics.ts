import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/宝晶即时库存查询相关/getMaterialStatisticsUsingPOST
*/
export default function fetchMethod(options: { data: IBaojingMaterialMasterDataInventorySearchVOparams: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultBaojingMaterialInventoryStatisticsVO>(
        {
            url: "/masterdata-service/baoJingWarehouseMaterial/getMaterialStatistics",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 宝晶物料主数据库存搜索VO */
export interface IBaojingMaterialMasterDataInventorySearchVO {
    /** 物料id集 */
    materialIds?: number[];
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 物料名称 */
    materialName?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 规格 */
    materialSpec?: string;
    /** 仓库id */
    storehouseIds?: number[];
    /** 物料种类 */
    materialTypes?: string[];
    /** 编号 */
    materialCode?: string;
    /** 仓库用途 */
    storehousePurposeList?: string[];
    /** 保管员 */
    materialCurators?: string[];
    /** 仓位用途 */
    warehousePurposeList?: string[];
    /** 材质 */
    materialTexture?: string[];
    /** 业务员id集合 */
    businessUserIdList?: number[];
    /** 工艺 */
    materialTechnology?: string[];
    /** 客户id集合 */
    customerIdList?: number[];
    /** 仓位id */
    warehouseIds?: number[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: ('Y' | 'N');
}
/** JSONResult«宝晶物料库存统计VO» */
export interface IJSONResultBaojingMaterialInventoryStatisticsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IBaojingMaterialInventoryStatisticsVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 宝晶物料库存统计VO */
export interface IBaojingMaterialInventoryStatisticsVO {
    /** 库存总数 */
    storageTotalCount?: number;
    /** 库存锁定数 */
    storageLockCount?: number;
    /** 库存可使用数 */
    storageUseCount?: number;
    /** 物料库存分页 */
    materialStorages?: IPagingInformationBaojingMaterialMasterDataInventoryReturnedToVO;
}
/** 分页信息«宝晶物料主数据库存返回VO» */
export interface IPagingInformationBaojingMaterialMasterDataInventoryReturnedToVO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IBaojingMaterialMasterDataInventoryReturnedToVO[];
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
/** 宝晶物料主数据库存返回VO */
export interface IBaojingMaterialMasterDataInventoryReturnedToVO {
    /** 物料id */
    id?: number;
    /** 物料名称 */
    name?: string;
    /** 物料编号 */
    code?: string;
    /** 规格 */
    spec?: string;
    /** 物料种类code */
    type?: string;
    /** 物料种类 */
    typeName?: string;
    /** 单位 */
    unit?: string;
    /** 外部编码 */
    materialOutsideCode?: string;
    /** 库存总数 */
    storageTotalCount?: number;
    /** 库存锁定数 */
    storageLockCount?: number;
    /** 库存可使用数 */
    storageUseCount?: number;
    /** 保管员 */
    materialCurator?: string;
    /** 材质 */
    materialTexture?: string;
    /** 工艺 */
    materialTechnology?: string;
    /** 客户id */
    customerId?: number;
    /** 客户名称 */
    customerName?: string;
    /** 业务员id */
    businessUserId?: number;
    /** 业务员名称 */
    businessUserName?: string;
}
