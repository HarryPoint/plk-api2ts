// 批次订单流水搜索VO
export interface I批次订单流水搜索VO {
    // 生产订单id
    produceOrderId: number;
    // 批次订单id
    lotOrderId: number;
    // 流水类型
    flowType: string;
}
// JSONResult«List«批次订单流水明细信息响应DTO»»
export interface IJSONResultList批次订单流水明细信息响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I批次订单流水明细信息响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 批次订单流水明细信息响应DTO
export interface I批次订单流水明细信息响应DTO {
    // id
    id: number;
    // 流水类型
    flowType: string;
    // 操作时间
    opTime: string;
    // 操作员姓名
    opUserName: string;
    // 批次号
    lotOrderNo: string;
    // 操作数量
    opQuantity: number;
    // 异常类型名称 -- 针对报废、暂扣、返工
    produceAbnormalName: string;
    // 当前处理状态 -- 针对返工、报废
    curHandleStatus: string;
    // 操作单号 -- 针对委外就是委外单号
    opCode: string;
}
