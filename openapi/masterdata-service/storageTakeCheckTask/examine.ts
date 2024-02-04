// 仓库盘点任务审批DTO
export interface IWarehouseInventoryTaskApprovalDTO {
    // 任务id
    id: number;
    // 审批类型
    examineType: string;
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
