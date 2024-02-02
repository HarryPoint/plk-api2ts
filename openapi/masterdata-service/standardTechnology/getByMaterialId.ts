// JSONResult«List«标准工艺下拉响应对象»»
export interface IJSONResultList标准工艺下拉响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I标准工艺下拉响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 标准工艺下拉响应对象
export interface I标准工艺下拉响应对象 {
    // id
    id: number;
    // 名称
    name: string;
}
