// http://47.108.139.107:16700/doc.html#/default/应付账款相关/amountPlusUsingPOST
// 添加应付账款DTO
export interface IAddAccountsPayableDTO {
    // 供应商id
    supplierId: number;
    // 业务员id
    businessUserId: number;
    // 已付金额
    paidAmount: number;
    // 应付金额
    payableAmount: number;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
