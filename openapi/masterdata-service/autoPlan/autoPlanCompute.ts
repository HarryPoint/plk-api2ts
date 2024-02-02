// 生产订单自动排产DTO
export interface I生产订单自动排产DTO {
    // 待排产订单id集
    waitProduceOrderIds: number[];
    // 是否正向排产
    isAsc: string;
    // 是否倒序排产
    isDesc: string;
    // 是否考虑自动提前
    isAutoMoveUp: string;
    // 排产开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 排产结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
}
// JSONResult«排产计算结果VO»
export interface IJSONResult排产计算结果VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 排产计算结果VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
