import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/客户相关/getByIdsUsingPOST_1
*/
export default function fetchMethod(options: { data: string[], params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListClientVO>(
        {
            url: "/masterdata-service/customer/getByIds",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«客户VO»» */
export interface IJSONResultListClientVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ICustomerVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 客户VO */
export interface ICustomerVO {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
    /** 公司电话 */
    companyPhone?: string;
    /** 传真 */
    fax?: string;
    /** 统一社会信用代码 */
    unifiedSocialCreditCode?: string;
    /** 银行id */
    bankId?: string;
    /** 开户账号 */
    bankAccount?: string;
}
