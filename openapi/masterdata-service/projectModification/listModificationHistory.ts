// JSONResult«List«项目变更信息»»
export interface IJSONResultList项目变更信息 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 项目变更信息[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
