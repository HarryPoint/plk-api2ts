// 维联批次打印模板绑定物料请求对象
export interface I维联批次打印模板绑定物料请求对象 {
    // 打印模板id
    printTemplateId: number;
    // 物料ids
    materialIds: number[];
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
