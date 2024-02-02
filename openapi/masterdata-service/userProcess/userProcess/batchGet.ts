// JSONResult«List«UserProcessVo»»
export interface IJSONResultListUserProcessVo {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: UserProcessVo[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
