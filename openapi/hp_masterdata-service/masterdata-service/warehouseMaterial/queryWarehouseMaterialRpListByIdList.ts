// JSONResult«List«WarehouseMaterialRpQueryResponseDTO»»
export interface IJSONResultListWarehouseMaterialRpQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IWarehouseMaterialRpQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// WarehouseMaterialRpQueryResponseDTO
export interface IWarehouseMaterialRpQueryResponseDTO {
    // ID
    id: number;
    // 物料id
    materialId: number;
    // 所属区域id
    areaId: number;
    // 所属仓库id
    storehouseId: number;
    // 所属仓位id
    warehouseId: number;
    // 库存总数
    storageTotalCount: number;
    // 库存锁定数
    storageLockCount: number;
    // 库存可使用数
    storageUseCount: number;
}