// http://47.108.139.107:16700/doc.html#/default/财务凭证相关/getOutsideFinancialVoucherUsingGET
// JSONResult«外部财务凭证响应对象»
export interface IJSONResultExternalFinancialCertificateResponseObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IExternalFinancialCertificateResponseObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 外部财务凭证响应对象
export interface IExternalFinancialCertificateResponseObject {
    // 凭证号
    voucherNo: string;
    // 凭证字号
    voucherType: string;
    // 日期
    date: string;
    // 凭证期间
    voucherPeriod: string;
    // 借方合计
    debitEntryTotalAmount: string;
    // 贷方合计
    creditEntryTotalAmount: string;
    // 明细
    details: IExternalFinancialCertificateDetailsResponseObject[];
}
// 外部财务凭证详情响应对象
export interface IExternalFinancialCertificateDetailsResponseObject {
    // 摘要
    summary: string;
    // 科目
    accountName: string;
    // 借方
    debitEntry: string;
    // 贷方
    creditEntry: string;
}
