// 生产订单自动排产下发任务数据校验请求DTO
export interface I生产订单自动排产下发任务数据校验请求DTO {
    // 生产订单ids
    produceOrderIds: number[];
}
// JSONResult«生产订单自动排产下发任务数据校验返回DTO»
export interface IJSONResult生产订单自动排产下发任务数据校验返回DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产订单自动排产下发任务数据校验返回DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产订单自动排产下发任务数据校验返回DTO
export interface I生产订单自动排产下发任务数据校验返回DTO {
    // 排产开始时间订单流程表单字段名称
    producePlanStartTimeFormFieldName: string;
    // 排产结束时间订单流程表单字段名称
    producePlanEndTimeFormFieldName: string;
    // 数据校验明细
    dataCheckItems: I生产订单自动排产下发任务数据校验明细返回DTO[];
}
// 生产订单自动排产下发任务数据校验明细返回DTO
export interface I生产订单自动排产下发任务数据校验明细返回DTO {
    // 生产订单id
    produceOrderId: number;
    // 生产订单编号
    produceOrderCode: string;
    // 物料名称
    materialName: string;
    // 校验失败错误类型
    failType: string;
}
