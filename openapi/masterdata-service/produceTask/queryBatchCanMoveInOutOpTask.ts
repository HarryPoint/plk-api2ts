// 任务批量操作DTO_1
export interface I任务批量操作DTO_1 {
    // 工序id
    processId: number;
    // 生产任务查询列表
    produceTaskDetails: 任务批量操作DTO[];
    // 查询类型
    queryType: string;
}
// JSONResult«批量操作任务返回信息DTO»
export interface IJSONResult批量操作任务返回信息DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 批量操作任务返回信息DTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
