import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/应收账款相关/amountPlusUsingPOST_1
*/
export default function fetchMethod(options: { data: IAddAccountsReceivableDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
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
    /** 客户id */
    customerId?: string;
    /** 业务员id */
    businessUserId?: string;
    /** 已收金额 */
    receivedAmount?: number;
    /** 应收金额 */
    receivableAmount?: number;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
