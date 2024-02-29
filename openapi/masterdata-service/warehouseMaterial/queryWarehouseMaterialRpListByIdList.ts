import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16700/doc.html#/default/库存查询相关/queryWarehouseMaterialRpListByIdListUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListWarehouseMaterialRpQueryResponseDTO>(
        {
            url: "/masterdata-service/warehouseMaterial/queryWarehouseMaterialRpListByIdList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«WarehouseMaterialRpQueryResponseDTO»» */
export interface IJSONResultListWarehouseMaterialRpQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IWarehouseMaterialRpQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** WarehouseMaterialRpQueryResponseDTO */
export interface IWarehouseMaterialRpQueryResponseDTO {
    /** ID */
    id?: string;
    /** 物料id */
    materialId?: string;
    /** 所属区域id */
    areaId?: string;
    /** 所属仓库id */
    storehouseId?: string;
    /** 所属仓位id */
    warehouseId?: string;
    /** 库存总数 */
    storageTotalCount?: number;
    /** 库存锁定数 */
    storageLockCount?: number;
    /** 库存可使用数 */
    storageUseCount?: number;
}
