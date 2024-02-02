// 批次/序列号申请DTO
export interface I批次序列号申请DTO {
    // 批次/序列号方案id
    lotSerialNumPlanId: number;
    // 需申请数量
    needQuantity: number;
    // 生产订单id
    produceOrderId: number;
    // 销售订单id
    salesOrderId: number;
    // 销售订单明细id
    salesOrderDetailId: number;
    // 物料id
    materialId: number;
    // 索引开始位置
    latestOffset: number;
    // 连续申请方案id
    continuousLotSerialNumPlanId: number;
    // 连续申请数量
    continuousApplyQuantity: number;
}
// JSONResult«批次号使用DTO»
export interface IJSONResult批次号使用DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I批次号使用DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 批次号使用DTO
export interface I批次号使用DTO {
    // 异常批次号
    lotSerialNoErrorList: I批次号使用异常DTO[];
    // 批次号
    lotSerialNoList: string[];
    // 偏移量
    offset: number;
    // 错误信息
    commonErrorInfo: string;
}
// 批次号使用异常DTO
export interface I批次号使用异常DTO {
    // 批次号
    lotSerialNo: string;
    // 异常信息集合
    errorMsgList: string[];
}
