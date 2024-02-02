// 仓库流程出入库DTO
export interface I仓库流程出入库DTO {
    // 物料id
    materialId: number;
    // 入库仓位id
    inWarehouseId: number;
    // 出库仓位id
    outWarehouseId: number;
    // 数量
    quantity: number;
    // 出入库类型
    inOutType: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
