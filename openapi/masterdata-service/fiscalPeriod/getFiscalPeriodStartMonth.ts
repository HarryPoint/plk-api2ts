// JSONResult«设置期间开始月份Response»
export interface IJSONResult设置期间开始月份Response {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I设置期间开始月份Response;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 设置期间开始月份Response
export interface I设置期间开始月份Response {
    // ID
    startMonth: string;
}
