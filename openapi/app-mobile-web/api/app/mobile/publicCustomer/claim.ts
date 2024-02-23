import { http } from '@/api/http';

// http://47.108.139.107:17400/doc.html#/default/CRM-公海池相关/claimCustomerUsingPOST
export default function fetchMethod(data: ICustomerClaimInputVO) {
    return http<IJSONResultboolean>({
        url: "/app-mobile-web/api/app/mobile/publicCustomer/claim",
        method: "post",
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
