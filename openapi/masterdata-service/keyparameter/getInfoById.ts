// JSONResult«关键参数信息响应对象»
export interface IJSONResult关键参数信息响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 关键参数信息响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
