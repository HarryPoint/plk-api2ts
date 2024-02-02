// JSONResult«List«Id，名称VO»»
export interface IJSONResultListId名称VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IId名称VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// Id，名称VO
export interface IId名称VO {
    // id
    id: number;
    // 名称
    name: string;
}
