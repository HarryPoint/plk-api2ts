import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/库存查询相关/getMaterialRealWarehouseListUsingPOST
*/
export default function fetchMethod(options: { data: IMaterialRealTimeInventoryQueryReturnedToVO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListMaterialRealTimeLibraryFromVO>(
        {
            url: "/masterdata-service/warehouseMaterial/getMaterialRealWarehouseList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 物料实时库存查询返回VO */
export interface IMaterialRealTimeInventoryQueryReturnedToVO {
    /** 物料ids */
    materialIds?: string[];
    /** 仓库ids */
    storehouseIds?: string[];
    /** 仓库类型 */
    warehouseTypes?: EMaterialRealTimeInventoryQueryReturnedToVO_warehouseTypes_items[];
}
/** JSONResult«List«物料实时库从返回VO»» */
export interface IJSONResultListMaterialRealTimeLibraryFromVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IMaterialRealTimeLibraryFromBackToVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 物料实时库从返回VO */
export interface IMaterialRealTimeLibraryFromBackToVO {
    /** 物料id */
    materialId?: string;
    /** 物料名称 */
    materialName?: string;
    /** 物料规格 */
    materialSpec?: string;
    /** 库存锁定数量 */
    storageLockQuantity?: number;
    /** 库存总数量 */
    storageTotalQuantity?: number;
    /** 库存可用数量 */
    storageUseQuantity?: number;
    /** 仓库id */
    storehouseId?: string;
}

export enum EMaterialRealTimeInventoryQueryReturnedToVO_warehouseTypes_items {
    PHYSICAL = "PHYSICAL",
    LINE_SIDE = "LINE_SIDE",
    WIP = "WIP"
}
