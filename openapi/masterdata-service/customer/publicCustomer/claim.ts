import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/客户相关/claimCustomerUsingPOST
*/
export default function fetchMethod(options: { data: ICustomerClaimInputVO }, extraOptions?: any) {
    return http<IJSONResultboolean>(
        {
            url: "/masterdata-service/customer/publicCustomer/claim",
            method: "POST",
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
