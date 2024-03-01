import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16700/doc.html#/default/库存查询相关/queryWarehouseMaterialRpListUsingPOST
*/
export default function fetchMethod(options: { data: IWarehouseMaterialRpQueryRequestDTO[] }, extraOptions?: any) {
    return http<IJSONResultListWarehouseMaterialRpQueryResponseDTO>(
        {
            url: "/masterdata-service/warehouseMaterial/queryWarehouseMaterialRpList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** WarehouseMaterialRpQueryRequestDTO */
export interface IWarehouseMaterialRpQueryRequestDTO {
    /** 物料ID */
    materialId?: string;
    /** 仓位ID */
    warehouseId?: string;
}
/** JSONResult«List«WarehouseMaterialRpQueryResponseDTO»» */
export interface IJSONResultListWarehouseMaterialRpQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IWarehouseMaterialRpQueryResponseDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** WarehouseMaterialRpQueryResponseDTO */
export interface IWarehouseMaterialRpQueryResponseDTO {
    /** 所属区域id */
    areaId?: string;
    /** ID */
    id?: string;
    /** 物料id */
    materialId?: string;
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
}
