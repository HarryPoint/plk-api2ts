// CleanSameRowDataInputDTO
export interface ICleanSameRowDataInputDTO {
    // 表数据ID
    tableDataId: number;
    // 行数据ID
    rowId: number;
}
// JSONResult«string»
export interface IJSONResultstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
