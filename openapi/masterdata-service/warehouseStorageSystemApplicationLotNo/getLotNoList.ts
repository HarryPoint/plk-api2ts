// 仓位系统应用库存批次号分页查询对象
export interface I仓位系统应用库存批次号分页查询对象 {
    // 仓位系统应用id(eg：物料id)
    warehouseSystemApplicationId: number;
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 批次号
    lotNo: string;
    // 排序字段集
    orders: 分页排序VO[];
    // 可使用库存不为0---出库:Y 入库:N
    storageUseCountNotZero: string;
    // 仓库id
    storehouseIds: number[];
    // 仓位id
    warehouseIds: number[];
}
// JSONResult«分页信息«仓位系统应用库存批次号分页返回对象»»
export interface IJSONResult分页信息仓位系统应用库存批次号分页返回对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 分页信息«仓位系统应用库存批次号分页返回对象»;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
