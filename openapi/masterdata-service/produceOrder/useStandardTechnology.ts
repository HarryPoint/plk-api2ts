// 标准工艺使用请求
export interface I标准工艺使用请求 {
    // 生产订单和标准工艺关联关系列表
    itemList: 生产订单和标准工艺关系请求[];
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
