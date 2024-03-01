import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/应收账款快照相关/getAccountsReceivableGroupDayUsingGET
*/
export default function fetchMethod(options: { params: { Day?: string; EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultAccountsReceivableVO>(
        {
            url: "/masterdata-service/accountsReceivableSnapshot/getAccountsReceivableGroupDay",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«AccountsReceivableVO» */
export interface IJSONResultAccountsReceivableVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IAccountsReceivableVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** AccountsReceivableVO */
export interface IAccountsReceivableVO {
    /** undefined */
    amountReceivable?: number;
    /** undefined */
    amountReceived?: number;
}
