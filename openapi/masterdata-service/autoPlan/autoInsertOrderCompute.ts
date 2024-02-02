// 生产订单自动插单DTO
export interface I生产订单自动插单DTO {
    // 待排产订单id集
    waitProduceOrderIds: number[];
    // 是否正向排产
    isAsc: string;
    // 是否倒序排产
    isDesc: string;
    // 是否考虑自动提前
    isAutoMoveUp: string;
    // 插单类型
    insertOrderType: string;
    // 插单时间 yyyy-MM-dd HH:mm:ss
    insertTime: string;
    // 插单生产订单id
    insertProduceOrderId: number;
    // 插单位置
    insertOrderPosition: string;
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
