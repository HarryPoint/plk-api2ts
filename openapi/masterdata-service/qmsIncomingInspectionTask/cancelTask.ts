// 检验任务取消请求DTO
export interface I检验任务取消请求DTO {
    // 流程id
    flowPathId: number;
    // 任务id
    ids: number[];
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
