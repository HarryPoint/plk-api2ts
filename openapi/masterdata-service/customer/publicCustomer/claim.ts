import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/客户相关/claimCustomerUsingPOST
export default function fetchMethod(data: ICustomerClaimInputVO) {
    return post<IJSONResultboolean>({
      url: "/masterdata-service/customer/publicCustomer/claim",
      data,
    });
}
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
