// http://47.108.139.107:16700/doc.html#/default/首检检验任务相关/cancelTaskUsingPOST_1
// 检验任务取消请求DTO
export interface IVerifyTaskCancellationRequestDTO {
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
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
