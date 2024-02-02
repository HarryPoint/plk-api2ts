// JSONResult«List«维联批次打印模板绑定物料响应对象»»
export interface IJSONResultList维联批次打印模板绑定物料响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I维联批次打印模板绑定物料响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 维联批次打印模板绑定物料响应对象
export interface I维联批次打印模板绑定物料响应对象 {
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
}
