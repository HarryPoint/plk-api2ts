// http://47.108.139.107:16700/doc.html#/default/生产订单相关/getProduceOrderSelectorUsingGET_1
// JSONResult«List«生产订单返回VO»»
export interface IJSONResultListTheProductionOrderIsReturnedToVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionOrderReturnedToVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产订单返回VO
export interface IProductionOrderReturnedToVO {
    // id
    id: number;
    // 生产订单号
    produceOrderCode: string;
}
