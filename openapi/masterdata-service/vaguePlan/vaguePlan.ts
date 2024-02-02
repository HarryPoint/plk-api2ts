// 生产订单模糊排产DTO
export interface I生产订单模糊排产DTO {
    // 排产计划单名称
    planName: string;
    // 排产订单集
    orders: 生产订单模糊排产订单DTO[];
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
