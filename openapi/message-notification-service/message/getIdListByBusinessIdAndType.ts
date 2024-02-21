// 消息查询DTO
export interface IMessageQueryDTO {
    // 业务类型
    businessType: string;
    // 业务id
    businessIds: number[];
}
// JSONResult«List«long»»
export interface IJSONResultListlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
