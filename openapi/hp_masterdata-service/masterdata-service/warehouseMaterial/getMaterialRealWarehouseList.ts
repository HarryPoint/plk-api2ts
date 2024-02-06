// 物料实时库存查询返回VO
export interface IMaterialRealTimeInventoryQueryReturnedToVO {
    // 物料ids
    materialIds: number[];
    // 仓库ids
    storehouseIds: number[];
    // 仓库类型
    warehouseTypes: string[];
}
// JSONResult«List«物料实时库从返回VO»»
export interface IJSONResultListMaterialRealTimeLibraryFromVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IMaterialRealTimeLibraryFromBackToVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 物料实时库从返回VO
export interface IMaterialRealTimeLibraryFromBackToVO {
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料规格
    materialSpec: string;
    // 仓库id
    storehouseId: number;
    // 库存总数量
    storageTotalQuantity: number;
    // 库存锁定数量
    storageLockQuantity: number;
    // 库存可用数量
    storageUseQuantity: number;
}
