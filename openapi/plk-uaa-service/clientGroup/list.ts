// JSONResult«List«客户端组响应 DTO»»
export interface IJSONResultListTheClientGroupRespondsToTheDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheClientGroupRespondsToTheDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 客户端组响应 DTO
export interface ITheClientGroupRespondsToTheDTO {
    // id
    id: number;
    // 编码
    code: string;
    // 名称
    name: string;
}
