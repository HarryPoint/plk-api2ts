// JSONResult«List«Id，值VO»»
export interface IJSONResultListId值VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IId值VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// Id，值VO
export interface IId值VO {
    // id
    id: number;
    // 值
    value: number;
}
