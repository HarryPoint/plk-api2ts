// 盘点任务提交DTO
export interface I盘点任务提交DTO {
    // 任务id
    id: number;
    // 提交清单
    list: 盘点任务提交清单DTO[];
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
