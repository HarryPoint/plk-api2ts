// JSONResult«销售订单关闭信息返回VO»
export interface IJSONResult销售订单关闭信息返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I销售订单关闭信息返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 销售订单关闭信息返回VO
export interface I销售订单关闭信息返回VO {
    // id
    id: number;
    // 销售订单号
    salesOrderCode: string;
    // 是否存在未关闭的生产订单
    hasNotCloseProduceOrder: string;
    // 是否存在未处理的审批事件
    hasWaitProduceHandle: string;
    // 是否存在未处理完的委外订单
    hasSurplusProduceEntrust: string;
    // 明细
    details: I销售订单明细关闭信息返回VO[];
}
// 销售订单明细关闭信息返回VO
export interface I销售订单明细关闭信息返回VO {
    // 明细id
    id: number;
    // 对应物料id
    materialId: number;
    // 对应物料名称
    materialName: string;
    // 对应物料编号
    materialCode: string;
    // 总销售数量(销售订单需求数量)
    totalCount: number;
    // 总合格产出数量(产出完成)
    totalProduceCount: number;
    // 未转换数量
    notConvertCount: number;
}
