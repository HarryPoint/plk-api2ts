// JSONResult«List«维联批次打印模板响应对象»»_1
export interface IJSONResultList维联批次打印模板响应对象_1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I维联批次打印模板响应对象_2[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 维联批次打印模板响应对象_2
export interface I维联批次打印模板响应对象_2 {
    // id
    id: number;
    // 模板名称
    name: string;
    // 模板类型
    type: string;
    // 打印模板
    printTemplate: string;
}
