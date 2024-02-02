// JSONResult«采购明细表统计返回对象»
export interface IJSONResult采购明细表统计返回对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I采购明细表统计返回对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 采购明细表统计返回对象
export interface I采购明细表统计返回对象 {
    // 数量
    quantity: number;
    // 含税金额
    amountWithTax: number;
    // 采购金额
    amountWithDiscountedTax: number;
}
