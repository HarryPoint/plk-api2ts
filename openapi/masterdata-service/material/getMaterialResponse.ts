// JSONResult«物料返回信息»
export interface IJSONResult物料返回信息 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 物料返回信息;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
