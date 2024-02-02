// 工序任务分配DTO
export interface IProcessTaskAssignmentDTO {
    // 工序ids
    processIds: number[];
    // 是否分配  Y 分配 N 不分配
    isAssign: string;
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
