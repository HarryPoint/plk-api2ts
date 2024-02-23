import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/库存查询相关/queryWarehouseMaterialRpListUsingPOST
export default function fetchMethod(data: IWarehouseMaterialRpQueryRequestDTO[]) {
    return post<IJSONResultListWarehouseMaterialRpQueryResponseDTO>({
      url: "/masterdata-service/warehouseMaterial/queryWarehouseMaterialRpList",
      data,
    });
}
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
