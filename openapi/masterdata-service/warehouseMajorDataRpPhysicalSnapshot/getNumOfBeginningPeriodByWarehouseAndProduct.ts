import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/仓位物料库存关联实体仓快照相关/getNumOfBeginningPeriodByWarehouseAndProductUsingPOST
*/
export default function fetchMethod(options: { params: { date?: string; enterpriseId?: number; materialId?: number; warehouseId?: number } }, extraOptions?: any) {
    return http<IJSONResultWarehouseMaterialInventoryAssociatedVO>(
        {
            url: "/masterdata-service/warehouseMajorDataRpPhysicalSnapshot/getNumOfBeginningPeriodByWarehouseAndProduct",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«仓位物料库存关联VO» */
export interface IJSONResultWarehouseMaterialInventoryAssociatedVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPositionMaterialInventoryAssociatedWithVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 仓位物料库存关联VO */
export interface IPositionMaterialInventoryAssociatedWithVO {
    /** id */
    id?: number;
    /** 所属企业id */
    enterpriseId?: number;
    /** 快照日期 */
    snapshotDate?: string;
    /** 所属物料主数据id */
    materialId?: number;
    /** 所属仓库id */
    storehouseId?: number;
    /** 所属仓位id */
    warehouseId?: number;
    /** 仓位类型 */
    warehouseType?: string;
    /** 库存总数 */
    storageTotalCount?: number;
    /** 库存锁定数 */
    storageLockCount?: number;
    /** 库存可使用数 */
    storageUseCount?: number;
}
