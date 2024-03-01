import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/应收账款相关/amountPlusUsingPOST_1
*/
export default function fetchMethod(options: { data: IAddAccountsReceivableDTO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/accountsReceivable/amountPlus",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 添加应收账款DTO */
export interface IAddAccountsReceivableDTO {
    /** 业务员id */
    businessUserId?: string;
    /** 客户id */
    customerId?: string;
    /** 应收金额 */
    receivableAmount?: number;
    /** 已收金额 */
    receivedAmount?: number;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
