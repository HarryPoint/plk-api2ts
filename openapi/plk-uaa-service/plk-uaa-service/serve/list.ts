// JSONResult«List«服务响应 DTO»»
export interface ITheJSONResultListServiceRespondsToTheDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IServiceRespondsToDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 服务响应 DTO
export interface IServiceRespondsToDTO {
    // id
    id: number;
    // 编码
    code: string;
    // 名称
    name: string;
}
