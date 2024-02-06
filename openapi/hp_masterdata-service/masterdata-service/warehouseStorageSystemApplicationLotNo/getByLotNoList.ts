// 仓位系统应用库存批次号查询对象
export interface ITheWarehouseSystemAppliesTheInventoryBatchNumberToQueryTheObject {
    // 批次号
    lotNo: string[];
}
// JSONResult«List«仓位系统应用库存批次号分页返回对象»»
export interface IJSONResultListTheWarehouseSystemAppliesTheInventoryBatchNumberToThePagingReturnObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheWarehouseSystemAppliesTheInventoryBatchNumberToPagingReturnObjects[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 仓位系统应用库存批次号分页返回对象
export interface ITheWarehouseSystemAppliesTheInventoryBatchNumberToPagingReturnObjects {
    // 仓位系统应用关联数据id(eg：物料id)
    warehouseSystemApplicationId: number;
    // 批次号
    lotNo: string;
    // 仓库id
    storehouseId: number;
    // 仓库名称
    storehouseName: string;
    // 仓位id
    warehouseId: number;
    // 仓位名称
    warehouseName: string;
    // 库存总数
    storageTotalCount: number;
    // 库存锁定数
    storageLockCount: number;
    // 库存可使用数
    storageUseCount: number;
}
