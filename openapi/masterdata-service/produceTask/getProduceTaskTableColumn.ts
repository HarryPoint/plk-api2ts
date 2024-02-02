// JSONResult«List«生产任务导出表格列DTO»»
export interface IJSONResultList生产任务导出表格列DTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 生产任务导出表格列DTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
