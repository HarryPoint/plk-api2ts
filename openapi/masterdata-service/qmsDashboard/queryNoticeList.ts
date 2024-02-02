// JSONResult«List«通告栏»»
export interface IJSONResultList通告栏 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I通告栏[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 通告栏
export interface I通告栏 {
    // ID
    id: number;
    // 通知内容
    content: string;
}
