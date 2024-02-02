// 生产订单自动插单计算结果确定DTO
export interface I生产订单自动插单计算结果确定DTO {
    // 排产计划单名称
    planName: string;
    // 排产方式
    autoPlanType: string;
    // 是否考虑自动提前（要传计算时的值）
    isAutoMoveUp: string;
    // 生产订单计划时间集
    produceOrderPlanTimes: 生产订单自动排产计划时间DTO[];
    // 顺延订单计划时间集
    produceOrderPostponeTimes: 生产订单自动排产计划时间DTO[];
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
