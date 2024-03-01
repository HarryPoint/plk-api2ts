import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/应付账款相关/amountPlusUsingPOST
*/
export default function fetchMethod(options: { data: IAddAccountsPayableDTO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/accountsPayable/amountPlus",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 添加应付账款DTO */
export interface IAddAccountsPayableDTO {
    /** 业务员id */
    businessUserId?: string;
    /** 已付金额 */
    paidAmount?: number;
    /** 应付金额 */
    payableAmount?: number;
    /** 供应商id */
    supplierId?: string;
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
