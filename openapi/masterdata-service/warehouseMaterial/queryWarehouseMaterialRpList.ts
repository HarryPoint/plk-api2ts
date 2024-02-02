// WarehouseMaterialRpQueryRequestDTO
export interface IWarehouseMaterialRpQueryRequestDTO {
    // 物料ID
    materialId: number;
    // 仓位ID
    warehouseId: number;
}
// JSONResult«List«WarehouseMaterialRpQueryResponseDTO»»
export interface IJSONResultListWarehouseMaterialRpQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: WarehouseMaterialRpQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
