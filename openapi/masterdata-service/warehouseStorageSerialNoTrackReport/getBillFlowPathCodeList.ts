// JSONResult«List«Id Code Name 通用传输对象»»
export interface IJSONResultListIdCodeName通用传输对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IIdCodeName通用传输对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// Id Code Name 通用传输对象
export interface IIdCodeName通用传输对象 {
    // id
    id: number;
    // code
    code: string;
    // name
    name: string;
}
