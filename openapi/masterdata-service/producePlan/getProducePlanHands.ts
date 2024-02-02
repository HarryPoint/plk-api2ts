// JSONResult«List«生产计划手动排产VO»»
export interface IJSONResultList生产计划手动排产VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产计划手动排产VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产计划手动排产VO
export interface I生产计划手动排产VO {
    // 生产订单id
    id: number;
    // 按日排产明细
    dayQuantities: I生产订单手动排产按日排产VO[];
    // 按班次排产明细
    classShiftQuantities: I生产订单手动排产按班次排产VO[];
    // 步骤产量集
    steps: I生产订单手动排产明细步骤产量VO[];
}
// 生产订单手动排产按日排产VO
export interface I生产订单手动排产按日排产VO {
    // 日期
    scheduleDate: string;
    // 产量
    quantity: number;
}
// 生产订单手动排产按班次排产VO
export interface I生产订单手动排产按班次排产VO {
    // 日期
    scheduleDate: string;
    // 班次产量集
    classShifts: I班次产量VO[];
}
// 班次产量VO
export interface I班次产量VO {
    // 班次id
    classShiftId: number;
    // 产量
    quantity: number;
}
// 生产订单手动排产明细步骤产量VO
export interface I生产订单手动排产明细步骤产量VO {
    // 步骤id
    id: number;
    // 按日排产明细
    dayQuantities: I生产订单手动排产按日排产VO[];
    // 按班次排产明细
    classShiftQuantities: I生产订单手动排产按班次排产VO[];
}
