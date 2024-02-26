import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/客户相关/getVOByIdNotCheckUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: number; id?: number } }, extraOptions?: any) {
    return http<IJSONResultCustomerVO>(
        {
            url: "/masterdata-service/customer/getVOByIdNotCheck",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«客户VO» */
export interface IJSONResultCustomerVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ICustomerVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 客户VO */
export interface ICustomerVO {
    /** id */
    id?: number;
    /** 所属企业id */
    enterpriseId?: number;
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
    bankId?: number;
    /** 开户账号 */
    bankAccount?: string;
}
