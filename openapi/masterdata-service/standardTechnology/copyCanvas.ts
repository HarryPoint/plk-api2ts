// 标准工艺画布复制请求对象
export interface I标准工艺画布复制请求对象 {
    // 标准工艺id
    standardTechnologyId: number;
}
// JSONResult«标准工艺画布响应对象»
export interface IJSONResult标准工艺画布响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: 标准工艺画布响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
