// JSONResult«List«生产成本核算单据状态校验响应DTO»»
export interface IJSONResultList生产成本核算单据状态校验响应DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I生产成本核算单据状态校验响应DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 生产成本核算单据状态校验响应DTO
export interface I生产成本核算单据状态校验响应DTO {
    // 单据id
    billId: number;
    // 单据编号
    billCode: string;
    // 当前处理人
    handleUserNames: string[];
    // 待办id
    todoId: number;
    // 待办对应的流程任务id
    flowPathTaskId: number;
}
