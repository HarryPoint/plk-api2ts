import { get } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/应收账款快照相关/getOrDefaultForVOUsingGET
export default function fetchMethod(params: { businessUserId?: number; customerId?: number; day: string; enterpriseId: number }) {
    return get<IJSONResultAccountsReceivableSnapshotVO['data']>({
      url: "/masterdata-service/accountsReceivableSnapshot/getOrDefaultForVO",
      params,
    });
}
// JSONResult«AccountsReceivableSnapshotVO»
export interface IJSONResultAccountsReceivableSnapshotVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IAccountsReceivableSnapshotVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// AccountsReceivableSnapshotVO
export interface IAccountsReceivableSnapshotVO {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 快照日期
    snapshotDate: string;
    // 客户id
    customerId: number;
    // 所属业务员id
    businessUserId: number;
    // 应收金额
    amountReceivable: number;
    // 已收金额
    amountReceived: number;
}
