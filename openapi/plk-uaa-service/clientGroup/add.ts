// 客户端组新增 DTO
export interface ITheDTOIsAddedToTheClientGroup {
    // 编码
    code: string;
    // 名称
    name: string;
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
