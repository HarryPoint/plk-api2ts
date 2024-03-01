import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:16700/doc.html#/default/财务凭证相关/getOutsideFinancialVoucherUsingGET
*/
export default function fetchMethod(options: { params: { ApplicationId?: string; Id?: string; VoucherNo?: string } }, extraOptions?: any) {
    return http<IJSONResultExternalFinancialCertificateResponseObject>(
        {
            url: "/masterdata-service/financialVoucher/getOutsideFinancialVoucher",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«外部财务凭证响应对象» */
export interface IJSONResultExternalFinancialCertificateResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IExternalFinancialCertificateResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 外部财务凭证响应对象 */
export interface IExternalFinancialCertificateResponseObject {
    /** 贷方合计 */
    creditEntryTotalAmount?: string;
    /** 日期 */
    date?: number;
    /** 借方合计 */
    debitEntryTotalAmount?: string;
    /** 明细 */
    details?: IExternalFinancialCertificateDetailsResponseObject[];
    /** 凭证号 */
    voucherNo?: string;
    /** 凭证期间 */
    voucherPeriod?: string;
    /** 凭证字号 */
    voucherType?: string;
}
/** 外部财务凭证详情响应对象 */
export interface IExternalFinancialCertificateDetailsResponseObject {
    /** 科目 */
    accountName?: string;
    /** 贷方 */
    creditEntry?: string;
    /** 借方 */
    debitEntry?: string;
    /** 摘要 */
    summary?: string;
}
