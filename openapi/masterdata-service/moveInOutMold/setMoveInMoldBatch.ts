// 生产任务批量设置进料模具请求DTO
export interface I生产任务批量设置进料模具请求DTO {
    // 工序id
    processId: number;
    // 生产任务详情
    produceTaskDetails: 生产任务批量设置进料模具任务详情请求DTO[];
    // 模具ids
    moldIds: number[];
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
