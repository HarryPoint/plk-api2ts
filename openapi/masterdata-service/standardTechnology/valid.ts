// 标准工艺启用、停用请求对象
export interface I标准工艺启用停用请求对象 {
    // 启用 Y 停用 N
    valid: string;
    // 是否 启用/停用 全部, Y 全部
    validAll: string;
    // 标准工艺ids
    standardTechnologyIds: number[];
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
