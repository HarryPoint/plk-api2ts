// JSONResult«List«客户VO»»
export interface IJSONResultListClientVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ICustomerVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 客户VO
export interface ICustomerVO {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 名称
    name: string;
    // 编号
    code: string;
    // 公司电话
    companyPhone: string;
    // 传真
    fax: string;
    // 统一社会信用代码
    unifiedSocialCreditCode: string;
    // 银行id
    bankId: number;
    // 开户账号
    bankAccount: string;
}
