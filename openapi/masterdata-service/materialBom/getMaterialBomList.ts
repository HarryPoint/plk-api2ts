// 物料bom查询请求对象
export interface I物料bom查询请求对象 {
    // 物料id
    materialId: number;
}
// JSONResult«List«物料bom响应对象»»
export interface IJSONResultList物料bom响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 物料bom响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
