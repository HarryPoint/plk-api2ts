// JSONResult«List«销售订单 - 生产订单返回VO»»
export interface IJSONResultList销售订单生产订单返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I销售订单生产订单返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 销售订单 - 生产订单返回VO
export interface I销售订单生产订单返回VO {
    // id
    id: number;
    // 生产订单号
    produceOrderCode: string;
    // 对应物料id
    materialId: number;
    // 对应物料名称
    materialName: string;
    // 对应物料编号
    materialCode: string;
    // 对应物料规格
    materialSpec: string;
    // 对应物料单位
    materialUnit: string;
    // 总生产数量
    totalCount: number;
    // 当前生产数量
    currentCount: number;
    // 计划开始时间
    beginTime: string;
    // 计划结束时间
    endTime: string;
    // 订单状态
    orderStatus: string;
    // 订单状态描述
    orderStatusDesc: string;
}
