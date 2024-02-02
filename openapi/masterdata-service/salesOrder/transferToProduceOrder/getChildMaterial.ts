// 生产子物料查询请求
export interface I生产子物料查询请求 {
    // 销售订单详细ID
    salesOrderDetailId: number;
    // 主物料总生产数量
    masterMaterialTotalProduceQuantity: number;
    // 标准生产工艺ID
    standardTechnologyId: number;
}
// JSONResult«List«生产子物料信息»»
export interface IJSONResultList生产子物料信息 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产子物料信息[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
