// 客户端组修改 DTO
export interface IExampleModifyTheDTOOfAClientGroup {
    // 编码
    code: string;
    // 名称
    name: string;
    // id
    id: number;
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
