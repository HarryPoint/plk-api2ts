// 物料齐套查询请求对象
export interface I物料齐套查询请求对象 {
    // 物料id
    materialId: number;
    // 标准工艺id
    standardTechnologyId: number;
    // 需求数量
    needCount: number;
}
// JSONResult«物料齐套查询响应对象»
export interface IJSONResult物料齐套查询响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 物料齐套查询响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
