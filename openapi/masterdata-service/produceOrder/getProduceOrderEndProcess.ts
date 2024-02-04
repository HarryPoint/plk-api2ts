// 生产订单最后一道工序查询VO
export interface I生产订单最后一道工序查询VO {
    // 物料ids
    materialIds: number[];
    // 物料种类
    materialType: string;
}
// JSONResult«List«生产订单最后一道工序VO»»
export interface IJSONResultList生产订单最后一道工序VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产订单最后一道工序VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产订单最后一道工序VO
export interface I生产订单最后一道工序VO {
    // 生产订单id
    orderId: number;
    // 物料id
    materialId: number;
    // 物料编码
    materialCode: string;
    // 物料名称
    materialName: string;
    // 物料种类
    materialType: string;
    // 物料规格
    materialSpec: string;
    // 生产订单的工艺路径id
    produceTechnologyRoutingId: number;
    // 生产订单的生产工艺工艺路径最后一个工艺步骤id
    endProduceTechnologyRoutingStepId: number;
    // 最后一个工艺步骤对应的工序id
    endProcessId: number;
}