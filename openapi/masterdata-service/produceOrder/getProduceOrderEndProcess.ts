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
    data: 生产订单最后一道工序VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
