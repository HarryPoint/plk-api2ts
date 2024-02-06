// CustomerClaimInputVO
export interface ICustomerClaimInputVO {
    // 客户ID列表
    customerIdList: number[];
    // 用户ID
    userId: number;
}
// JSONResult«boolean»
export interface IJSONResultboolean {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: boolean;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
