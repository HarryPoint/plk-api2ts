import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/CRM-公海池相关/claimCustomerUsingPOST
*/
export default function fetchMethod(options: { data: ICustomerClaimInputVO }, extraOptions?: any) {
    return http<IJSONResultboolean>(
        {
            url: "/app-enterprise-web/api/app/enterprise/publicCustomer/claim",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** CustomerClaimInputVO */
export interface ICustomerClaimInputVO {
    /** 客户ID列表 */
    customerIdList?: string[];
    /** 用户ID */
    userId?: string;
}
/** JSONResult«boolean» */
export interface IJSONResultboolean {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: boolean;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
