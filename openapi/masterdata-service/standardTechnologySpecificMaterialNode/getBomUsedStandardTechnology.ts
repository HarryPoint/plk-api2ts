// bom占用的标准工艺查询对象
export interface Ibom占用的标准工艺查询对象 {
    // bomId
    bomId: number;
    // 当前的标准工艺id, 创建标准工艺阶段 传递null, 编辑标准工艺阶段 传递编辑的标准工艺id
    standardTechnologyId: number;
}
// JSONResult«List«bom占用的标准工艺响应»»
export interface IJSONResultListbom占用的标准工艺响应 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: bom占用的标准工艺响应[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
