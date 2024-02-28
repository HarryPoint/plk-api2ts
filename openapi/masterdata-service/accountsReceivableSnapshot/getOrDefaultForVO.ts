import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/应收账款快照相关/getOrDefaultForVOUsingGET
*/
export default function fetchMethod(options: { params: { businessUserId?: string; customerId?: string; day?: number; enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultAccountsReceivableSnapshotVO>(
        {
            url: "/masterdata-service/accountsReceivableSnapshot/getOrDefaultForVO",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«AccountsReceivableSnapshotVO» */
export interface IJSONResultAccountsReceivableSnapshotVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IAccountsReceivableSnapshotVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** AccountsReceivableSnapshotVO */
export interface IAccountsReceivableSnapshotVO {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 快照日期 */
    snapshotDate?: number;
    /** 客户id */
    customerId?: string;
    /** 所属业务员id */
    businessUserId?: string;
    /** 应收金额 */
    amountReceivable?: number;
    /** 已收金额 */
    amountReceived?: number;
}
