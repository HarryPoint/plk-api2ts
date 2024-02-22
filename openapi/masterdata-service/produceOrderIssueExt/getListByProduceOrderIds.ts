// http://47.108.139.107:16700/doc.html#/default/生产订单下发扩展信息/getListByProduceOrderIdsUsingPOST
// 生产订单下发扩展信息查询VO
export interface IProductionOrderDeliveryExtendedInformationQueryVO {
    // 生产订单ids
    produceOrderIds: number[];
}
// JSONResult«List«生产订单下发扩展信息VO»»
export interface IJSONResultListExtendedInformationVOForProductionOrderDelivery {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProductionOrderDeliveryExtendedMessageVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产订单下发扩展信息VO
export interface IProductionOrderDeliveryExtendedMessageVO {
    // 生产订单id
    produceOrderId: number;
    // 下发人id
    issueUserId: number;
    // 下发人
    issueUser: string;
    // 下发时间
    issueTime: string;
    // 下发人id
    planUserId: number;
    // 计划人
    planUser: string;
    // 计划时间
    planTime: string;
}
