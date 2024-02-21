// JSONResult«List«目标应用查询请求»»
export interface IJSONResultListTheTargetApplicationQueryRequest {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITargetApplicationQueryRequest[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 目标应用查询请求
export interface ITargetApplicationQueryRequest {
    // undefined
    flowPathEventId: number;
    // undefined
    targetAppId: number;
}
