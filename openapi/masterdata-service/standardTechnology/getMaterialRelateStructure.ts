// JSONResult«具体物料数据结构响应对象»
export interface IJSONResult具体物料数据结构响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 具体物料数据结构响应对象_1;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
