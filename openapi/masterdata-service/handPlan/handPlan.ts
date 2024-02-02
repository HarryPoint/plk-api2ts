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
    orders: 生产订单手动排产明细订单维度DTO[];
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
