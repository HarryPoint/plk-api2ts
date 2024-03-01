import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/仓位物料库存关联实体仓快照相关/getNumOfBeginningPeriodByWarehouseAndProductUsingPOST
*/
export default function fetchMethod(options: { params: { Date?: number; EnterpriseId?: string; MaterialId?: string; WarehouseId?: string } }, extraOptions?: any) {
    return http<IJSONResultWarehouseMaterialInventoryAssociatedVO>(
        {
            url: "/masterdata-service/warehouseMajorDataRpPhysicalSnapshot/getNumOfBeginningPeriodByWarehouseAndProduct",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«仓位物料库存关联VO» */
export interface IJSONResultWarehouseMaterialInventoryAssociatedVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IPositionMaterialInventoryAssociatedWithVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 仓位物料库存关联VO */
export interface IPositionMaterialInventoryAssociatedWithVO {
    /** 所属企业id */
    enterpriseId?: string;
    /** id */
    id?: string;
    /** 所属物料主数据id */
    materialId?: string;
    /** 快照日期 */
    snapshotDate?: number;
    /** 库存锁定数 */
    storageLockCount?: number;
    /** 库存总数 */
    storageTotalCount?: number;
    /** 库存可使用数 */
    storageUseCount?: number;
    /** 所属仓库id */
    storehouseId?: string;
    /** 所属仓位id */
    warehouseId?: string;
    /** 仓位类型 */
    warehouseType?: EPositionMaterialInventoryAssociatedWithVO_warehouseType;
}

export enum EPositionMaterialInventoryAssociatedWithVO_warehouseType {
    /** 实体仓 */
    PHYSICAL = "PHYSICAL",
    /** 线边仓 */
    LINE_SIDE = "LINE_SIDE",
    /** WIP */
    WIP = "WIP"
}
