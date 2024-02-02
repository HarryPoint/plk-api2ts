// JSONResult«导出ticket信息»
export interface IJSONResult导出ticket信息 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I导出ticket信息;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出ticket信息
export interface I导出ticket信息 {
    // 导出凭证ticket
    ticket: string;
}
