// 预测工费_1
export interface I预测工费_1 {
    // 主物料ID
    masterMaterialId: number;
    // 子物料ID
    childMaterialId: number;
    // 工艺路径ID
    routingId: number;
    // 交付数量
    deliveryQuantity: number;
    // 销售订单ID
    salesOrderId: number;
    // 销售订单编号
    salesOrderNo: string;
    // BOM名称
    bomName: string;
    // BOM 级别
    bomLevel: number;
    // 标准工序工艺节点ID
    standardTechnologySpecificRoutingNodeId: number;
}
// JSONResult«List«预测工费»»
export interface IJSONResultList预测工费 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 预测工费_2[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
