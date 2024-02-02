// JSONResult«采购汇总报表合计返回对象»
export interface IJSONResult采购汇总报表合计返回对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I采购汇总报表合计返回对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 采购汇总报表合计返回对象
export interface I采购汇总报表合计返回对象 {
    // 采购数量
    purchaseQuantity: number;
    // 采购金额
    purchaseAmount: number;
}
