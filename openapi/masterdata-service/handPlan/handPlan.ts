// 生产订单手动排产DTO
export interface I生产订单手动排产DTO {
    // 排产计划单名称
    planName: string;
    // 排产维度
    dimension: string;
    // 时间维度
    timeDimension: string;
    // 排产开始日期 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 排产结束日期 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 排产明细订单维度
    orders: I生产订单手动排产明细订单维度DTO[];
}
// 生产订单手动排产明细订单维度DTO
export interface I生产订单手动排产明细订单维度DTO {
    // 生产订单id
    id: number;
    // 按日排产明细
    dayQuantities: I生产订单手动排产按日排产DTO[];
    // 按班次排产明细
    classShiftQuantities: I生产订单手动排产按班次排产DTO[];
    // 步骤产量集
    steps: I生产订单手动排产明细步骤产量DTO[];
}
// 生产订单手动排产按日排产DTO
export interface I生产订单手动排产按日排产DTO {
    // 日期
    scheduleDate: string;
    // 产量
    quantity: number;
}
// 生产订单手动排产按班次排产DTO
export interface I生产订单手动排产按班次排产DTO {
    // 日期 yyyy-MM-dd
    scheduleDate: string;
    // 班次产量集
    classShifts: I班次产量DTO[];
}
// 班次产量DTO
export interface I班次产量DTO {
    // 班次id
    classShiftId: number;
    // 产量
    quantity: number;
}
// 生产订单手动排产明细步骤产量DTO
export interface I生产订单手动排产明细步骤产量DTO {
    // 步骤id
    id: number;
    // 按日排产明细
    dayQuantities: I生产订单手动排产按日排产DTO[];
    // 按班次排产明细
    classShiftQuantities: I生产订单手动排产按班次排产DTO[];
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
